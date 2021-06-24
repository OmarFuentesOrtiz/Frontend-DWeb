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

  usuario: Usuario;
  usuarioId: number;

  roles?: TwoValModel[];
  save_model = new UpUsuario();

  constructor(private controllerService: ControllerService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'))
    this.save_model.id= this.usuarioId;
    this.getAllRoles();
    this.getUsuario();
  }

  getAllRoles():void {
    this.controllerService.getAllRoles()
        .subscribe((result:any) => {this.roles = result.data})
  }

  getUsuario():void {
    this.controllerService.getUsuarioById(this.usuarioId)
        .subscribe((result:any) => { this.usuario = result.data })
  }

  // submit(email:string, nick:string, rol:number){
  submit() {
    this.save_model.email = this.usuario.email;
    this.save_model.nickname = this.usuario.nickname.replace(/@/g, '');
    this.save_model.rol_id = 2;

    this.controllerService.saveUsuario(this.save_model)
        .subscribe({
            next: data => {
                this.usuario = data.usuario;
            },
            error: error => {
                // this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        });
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
