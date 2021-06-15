import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';
import {UpUsuario} from "../../model/up-usuario";
import {TwoValModel} from "../../model/two-val-model";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario = new Usuario();
  idUsuario: number;

  roles?: TwoValModel[];
  save_model = new UpUsuario();

  constructor(private controllerService: ControllerService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idUsuario = Number(this.route.snapshot.paramMap.get('id'))
    this.save_model.id= this.idUsuario;
    this.getAllRoles();
    this.getUsuario();
  }

  getAllRoles():void {
    this.controllerService.getAllRoles()
        .subscribe((result:any) => {this.roles = result.data})
  }

  getUsuario():void {
    this.controllerService.getUsuarioById(this.idUsuario)
    .subscribe((result:any) => { this.usuario = result.data
    })
  }

  // submit(email:string, nick:string, rol:number){
  submit() {
    this.save_model.email = this.usuario.email;
    this.save_model.nickname = this.usuario.nickname;
    this.save_model.rol_id = 2;

    console.log(this.save_model.id);
    console.log(this.save_model.rol_id);
    console.log(this.save_model.nickname);
    console.log(this.save_model.email);

    this.saveUsuario();
  }

  saveUsuario():void{
    this.controllerService.saveUsuario(this.save_model)
  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.submit();
  }

  model = new Usuario();

  newHero() {
    this.model = new Usuario();
  }

}
