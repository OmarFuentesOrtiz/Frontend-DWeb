import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/Servicio';
import { ServicioService } from 'src/app/services/servicio.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css']
})
export class ListServiciosComponent implements OnInit {

  servicios?: Servicio[];

  selectedServicio ?: Servicio;

  constructor(private ServicioService: ServicioService) { }

  getAllServicios(): void {
    this.ServicioService.getAllServicios()
    .subscribe((result: any) => this.servicios = result.data)
  }

  ngOnInit(): void {
    this.getAllServicios();
  }

  

}
