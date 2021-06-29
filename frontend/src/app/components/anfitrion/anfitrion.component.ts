import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';

import { Anfitrion } from "../../model/anfitrion";
import { ControllerService } from "../../services/controller.service";

@Component({
  selector: 'app-anfitrion',
  templateUrl: './anfitrion.component.html',
  styleUrls: ['./anfitrion.component.css']
})
export class AnfitrionComponent implements OnInit {

  usuario: Usuario;
  usuarioId: number;
  
  anfitriones: Anfitrion[];
  value = '';

  default_img = "https://www.alphacoatingtech.com/wp-content/uploads/2017/03/epoxy-gray.jpg";

  constructor(private controllerService:ControllerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
      this.getUsuario();
      this.getAllAnfitriones();
  }

  getUsuario(): void {
    this.controllerService.getUsuarioById(this.usuarioId)
    .subscribe((result:any) => this.usuario = result.data );
  }

  getAllAnfitriones(): void {
    this.controllerService.getAnfitriones()
        .subscribe((result: any) =>
        {
          this.anfitriones = result.data
        })
  }

  
  Anfitrionstarts(name: string):boolean {
    if(this.value == ""){
      return true;
    }
    if(name.toLowerCase().startsWith(this.value.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
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
