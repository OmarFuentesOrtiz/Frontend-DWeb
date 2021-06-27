import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anfitrion } from 'src/app/model/anfitrion';
import { Servicio } from 'src/app/model/servicio';
import { TwoValModel } from 'src/app/model/two-val-model';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  
  usuario: Usuario;
  usuarioId: number;

  servicios: Servicio[];

  value = '';
  selectedServicio ?: Servicio;
  tag = '';

  default_img = "https://www.alphacoatingtech.com/wp-content/uploads/2017/03/epoxy-gray.jpg";

  selectedModalidad = '';
  selectedPlataforma = '';
  selectedRegion = '';

  constructor(private controllerService: ControllerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUsuario();
    this.getAllServicios();
    this.getAllModalidades();
    this.getAllPlataformas();
    this.getAllRegiones(); 
  }
  getUsuario(): void {
    this.controllerService.getUsuarioById(this.usuarioId)
    .subscribe((result:any) => this.usuario = result.data );
  }
  getAllServicios(): void {
    let request = this.controllerService.getAllServiciosClient(this.usuarioId);

    request.subscribe((result: any) => {
      this.servicios = result.data
      console.log(result)
    });
  }

  getImg(img: any){
    if(img == null){
      return this.default_img;
    }
    else{
      return img;
    }
  }

  
  serviciostarts(servicio: Servicio):boolean {

    let resultado = false;

    if(this.value != "" && servicio.name.toLowerCase().startsWith(this.value.toLowerCase())) resultado = true;
    else resultado = false;
    if(this.value == "") resultado = true;

    return resultado;
  }

  servicioplataforma(servicio:Servicio):boolean {
    let resultado =false;
    if(servicio.plataforma_name.startsWith(this.selectedPlataforma)) resultado =true;
    else resultado = false;
    if(this.selectedPlataforma == "") resultado = true;

    return resultado;
  }
  serviciomodalidad(servicio:Servicio):boolean {
    let resultado =false;
    if(servicio.modalidad_name.startsWith(this.selectedModalidad)) resultado =true;
    else resultado = false;
    if(this.selectedModalidad == "") resultado = true;

    return resultado;
  }
  servicioregion(servicio:Servicio):boolean {
    let resultado =false;
    if(servicio.region_name.startsWith(this.selectedRegion)) resultado =true;
    else resultado = false;
    if(this.selectedRegion == "") resultado = true;

    return resultado;
  }
  modalidades?: TwoValModel[];
  getAllModalidades():void {
    this.controllerService.getAllModalidades()
        .subscribe((result:any)=> this.modalidades = result.data)
  }

  plataformas?: TwoValModel[];
  getAllPlataformas():void {
    this.controllerService.getAllPlataformas()
        .subscribe((result:any)=> this.plataformas = result.data)
  }

  regiones?: TwoValModel[];
  getAllRegiones():void {
    this.controllerService.getAllRegiones()
        .subscribe((result:any)=> this.regiones = result.data)
  }

}
