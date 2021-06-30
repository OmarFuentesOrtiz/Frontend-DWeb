import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/model/review';
import { Servicio } from 'src/app/model/servicio';
import { Usuario } from 'src/app/model/usuario';
import { ControllerService } from 'src/app/services/controller.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  public reservaForm: FormGroup;
  public servicio: Servicio = new Servicio();
  // public usuario: Usuario = new Usuario();
  servicioId: number;
  public reviews: Review[];

  usuario: Usuario;
  usuarioId: number;

  default_img = "https://www.alphacoatingtech.com/wp-content/uploads/2017/03/epoxy-gray.jpg";

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private controllerService: ControllerService
  ) {}

  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUsuario();
    this.servicioId = Number(this.route.snapshot.paramMap.get('sid'));
    this.getServicio();
    this.getReviews();
  }

  getServicio(): void{
    this.controllerService.getServicio(this.servicioId).subscribe(
      (result: any) => {
        this.servicio = result.data
      }
    )
  }
  getUsuario(): void{
    this.controllerService.getUsuarioById(this.usuarioId).subscribe(
      (result: any) => {
        this.usuario = result.data
      }
    )
  }

  getReviews(): void{
    this.controllerService.getReviews().subscribe(
      (result: any) => {
        console.log("no pos", result)
        this.reviews = result.data
      }
    );
    console.log("idk", this.reviews);
  }

  getImg(img: any){
    if(img == null){
      return this.default_img;
    }
    else{
      return img;
    }
  }

}
