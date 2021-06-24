import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anfitrion } from 'src/app/model/anfitrion';
import { Servicio } from 'src/app/model/Servicio';
import { TwoValModel } from 'src/app/model/two-val-model';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';
import { ServicioService } from 'src/app/services/servicio.service';

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

  selectedModalidad = '';
  selectedPlataforma = '';
  selectedRegion = '';

  constructor(private servicioService: ServicioService, 
    private controllerService: ControllerService,
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
    this.servicioService.getAllServicios()
    .subscribe((result: any) => 
    {
      this.servicios = result.data
      console.log(result.data)
    })
  }
  
  serviciostarts(servicio: Servicio):boolean {
    console.log(this.selectedModalidad)
    console.log(this.selectedPlataforma)

    let resultado = false;

    if(this.value != "" && servicio.name.toLowerCase().startsWith(this.value.toLowerCase())) resultado = true;
    else resultado = false;
    if(this.value == "") resultado = true;

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
