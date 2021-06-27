import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anfitrion } from 'src/app/model/anfitrion';
import { ServicioForm } from "../../model/servicio-form";
import { TwoValModel } from "../../model/two-val-model";
import { ControllerService } from "../../services/controller.service";

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {

  anfitrion: Anfitrion;
  anfitrionId: number;
  

  constructor(private controllerService:ControllerService,
    private route: ActivatedRoute) { }

  

  getAnfitrion(){
    this.controllerService.getAnfitrionById(this.anfitrionId)
    .subscribe((result:any) => {this.anfitrion = result.data })
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

  onSubmit() {
    this.submitted = true;
    this.model.usuario_id = this.anfitrion.id;
    this.controllerService.postServicio(this.model)
        .subscribe((result:any)=> this.model = result.data)
  }

  model = new ServicioForm();

  newHero() {
    this.model = new ServicioForm();
  }

  ngOnInit(): void {
    this.anfitrionId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAnfitrion();
    this.getAllPaises();
    this.getAllRegiones();
    this.getAllModalidades();
    this.getAllPlataformas();
  }
}
