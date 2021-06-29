import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { Usuario } from 'src/app/model/usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-misservicios',
  templateUrl: './misservicios.component.html',
  styleUrls: ['./misservicios.component.css']
})
export class MisserviciosComponent implements OnInit {

  usuario: Usuario;
  usuarioId: number;

  servicios: Servicio[];

  default_img = "https://www.alphacoatingtech.com/wp-content/uploads/2017/03/epoxy-gray.jpg";

  constructor(private controllerService: ControllerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUsuario();
    this.getAllServicios();
  }
  getUsuario(): void {
    this.controllerService.getUsuarioById(this.usuarioId)
    .subscribe((result:any) => this.usuario = result.data );
  }
  getAllServicios(): void {
    let request = this.controllerService.getAllServiciosClient(0);

    request.subscribe((result: any) => {
      this.servicios = result.data;
      this.servicios = this.servicios.filter(s => s.usuario_name == this.usuario.name);
      console.log(this.servicios);
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



}
