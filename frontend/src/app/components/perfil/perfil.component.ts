import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario = new Usuario();
  idUsuario: number;
  
  constructor(private controllerService: ControllerService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = Number(this.route.snapshot.paramMap.get('id'))
    this.getUsuario();
  }

  getUsuario(){
    this.controllerService.getUsuariobyId(this.idUsuario)
    .subscribe((result:any) => { this.usuario = result.data
    })
  }

}
