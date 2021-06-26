import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../model/Usuario";
import {ControllerService} from "../../services/controller.service";
import {UsuarioForm} from "../../model/usuario-form";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  value='';
  model = new UsuarioForm();
  usuario:Usuario;
  answer:string;

  constructor(private controllerService:ControllerService) { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.controllerService.postUsuario(this.model)
        .subscribe((result:any)=> this.usuario = result.data)
  }
}
