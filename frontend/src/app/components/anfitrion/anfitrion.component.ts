import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

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



}
