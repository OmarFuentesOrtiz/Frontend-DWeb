import { Component, OnInit } from '@angular/core';
import {ServicioForm} from "../../model/servicio-form";
import {TwoValModel} from "../../model/two-val-model";
import {ControllerService} from "../../services/controller.service";

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {

  constructor(private controllerService:ControllerService) { }

  ngOnInit(): void {
    this.getAllPaises();
    this.getAllRegiones();
    this.getAllModalidades();
    this.getAllPlataformas();
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
  paises?: TwoValModel[];
  getAllPaises():void {
    this.controllerService.getAllPaises()
        .subscribe((result:any)=> this.paises = result.data)
  }

  submitted = false;

  onSubmit() {this.submitted = true; }

  model = new ServicioForm();

  newHero() {
    this.model = new ServicioForm();
  }
}
