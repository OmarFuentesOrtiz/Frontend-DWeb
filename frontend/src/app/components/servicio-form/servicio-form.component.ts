import { Component, OnInit } from '@angular/core';
import {ServicioForm} from "../../model/servicio-form";

@Component({
  selector: 'app-servicio-form',
  templateUrl: './servicio-form.component.html',
  styleUrls: ['./servicio-form.component.css']
})
export class ServicioFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  modalidad = ['Servicio', "Otro"];

  submitted = false;

  onSubmit() {this.submitted = true; }

  model = new ServicioForm();

  newHero() {
    this.model = new ServicioForm();
  }
}
