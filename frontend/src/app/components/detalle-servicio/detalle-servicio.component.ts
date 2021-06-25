import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/model/review';
import { Servicio } from 'src/app/model/Servicio';
import { Usuario } from 'src/app/model/Usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  public reservaForm: FormGroup;
  public servicio: Servicio = new Servicio();
  public usuario: Usuario = new Usuario();
  private idServicio: number;
  private idUsuario: number;
  public reviews ?: Review[];

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private controllerService: ControllerService
  ) { }

  ngOnInit(): void {
    this.idServicio = Number(this.route.snapshot.paramMap.get('sid'));
    this.idUsuario = Number(this.route.snapshot.paramMap.get('id'));
    this.getServicio();
    this.getUsuario();
    this.getReviews();
  }

  getServicio(): void{
    this.controllerService.getServicio(this.idServicio).subscribe(
      (result: any) => {
        this.servicio = result.data
      }
    )
  }
  getUsuario(): void{
    this.controllerService.getUsuarioById(this.idUsuario).subscribe(
      (result: any) => {
        this.usuario = result.data
      }
    )
  }

  getReviews(): void{
    this.controllerService.getReviews().subscribe(
      (result: any) => {
        console.log('Reviews ', result)
        this.reviews = result.data
        console.log('Reviews  ', this.reviews)
    //    this.reviews.filter(x => x.servicio_id == this.servicio.id)
      }
    )
  }

  createReserva() {
    true;
  }
}
