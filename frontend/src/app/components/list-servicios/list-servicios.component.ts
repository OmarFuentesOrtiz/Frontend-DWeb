import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/Servicio';
import { SERVICIOS } from 'src/app/model/mock-servicios';
import { ServicioService } from 'src/app/services/servicio.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css']
})
export class ListServiciosComponent implements OnInit {

  servicios?: Servicio[] = SERVICIOS;

  selectedServicio ?: Servicio;

  constructor(private ServicioService: ServicioService) { }

  ngOnInit(): void {
    // getALL();
  }

  getAll(): void {
    this.ServicioService.getServicios()
    .subscribe(data => this.servicios=data);
  }

}
