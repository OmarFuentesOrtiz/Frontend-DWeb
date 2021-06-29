import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';
import {UpUsuario} from "../../model/up-usuario";
import {TwoValModel} from "../../model/two-val-model";
import { idioma } from 'src/app/model/idiomas';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  usuarioId: number;
  idiomas: idioma[];
  idioma: string;
  allidiomas: idioma[];
  roles?: TwoValModel[];
  save_model = new UpUsuario();

  default_img:string = "https://www.alphacoatingtech.com/wp-content/uploads/2017/03/epoxy-gray.jpg";

  constructor(private controllerService: ControllerService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'))
    this.save_model.id= this.usuarioId;
    this.getAllRoles();
    this.getUsuario();
    this.getidiomas();
    this.getallidiomas();
  }

  getAllRoles():void {
    this.controllerService.getAllRoles()
        .subscribe((result:any) => {this.roles = result.data})
  }

  getUsuario():void {
    this.controllerService.getUsuarioById(this.usuarioId)
        .subscribe((result:any) => { this.usuario = result.data })
  }

  getidiomas():void {
    this.controllerService.getIdiomasByUsuarioId(this.usuarioId)
        .subscribe((result:any) => { this.idiomas = result.data })
  }

  getallidiomas():void {
    this.controllerService.getAllIdiomas()
        .subscribe((result:any) => { this.allidiomas = result.data })
  }

  // submit(email:string, nick:string, rol:number){
  submit() {
    this.save_model.email = this.usuario.email;
    this.save_model.nickname = this.usuario.nickname.replace(/@/g, '');
    this.save_model.img = this.usuario.img;
    if(this.usuario.rol_name="Anfitrión"){
      this.save_model.rol_id = 2;
    }
    else{
      this.save_model.rol_id = 1;
    }

    this.controllerService.saveUsuario(this.save_model)
        .subscribe({
            //next: result => {
            //    this.usuario = result.data;
            //},

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

  getImg(img: string): string{
    if(img == null){
      return this.default_img;
    }
    else{
      return img;
    }
  }
}
