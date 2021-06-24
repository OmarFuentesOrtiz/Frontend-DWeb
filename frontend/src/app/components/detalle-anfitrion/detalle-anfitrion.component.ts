import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anfitrion } from 'src/app/model/anfitrion';
import { Servicio } from 'src/app/model/Servicio';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle-anfitrion',
  templateUrl: './detalle-anfitrion.component.html',
  styleUrls: ['./detalle-anfitrion.component.css']
})
export class DetalleAnfitrionComponent implements OnInit {
  
  public anfitrion: Anfitrion = new Anfitrion();

  private anfitrionId: number;
  public usuarioId: number;

  public servicios: Servicio[];

  constructor(
    private servicioService: ServicioService,
    private route:ActivatedRoute,
    private router: Router,
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
    this.anfitrionId = Number(this.route.snapshot.paramMap.get('aid'));
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAnfitrion();
    this.getServicios();
    
  }
  
  getAnfitrion(): void{
    this.controllerService.getAnfitrionById(this.anfitrionId).subscribe(
      (result: any) => {
        this.anfitrion = result.data
      }
    )
  }
  getServicios(): void{
    this.controllerService.getServiciosByAnfitrionId(this.anfitrionId).subscribe(
      (result: any) => {
        this.servicios = result.data
      }
    )
  }

}
