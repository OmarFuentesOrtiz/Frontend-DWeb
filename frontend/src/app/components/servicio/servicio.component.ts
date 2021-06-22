import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anfitrion } from 'src/app/model/anfitrion';
import { Servicio } from 'src/app/model/Servicio';
import { ControllerService } from 'src/app/services/controller.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  
  servicios?: Servicio[];
  serviciosMostrar?: Servicio[];

  value = '';
  selectedServicio ?: Servicio;

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.getAllServicios();
  }

  getAllServicios(): void {
    this.servicioService.getAllServicios()
    .subscribe((result: any) => 
    {
      this.servicios = result.data
      console.log(result.data)
    })
  }
  
  serviciostarts(name: string):boolean {
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
