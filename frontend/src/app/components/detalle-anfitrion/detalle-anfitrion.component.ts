import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anfitrion } from 'src/app/model/anfitrion';
import { Servicio } from 'src/app/model/servicio';
import { Usuario } from 'src/app/model/usuario';
import { ControllerService } from 'src/app/services/controller.service';

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
  default_img = "https://www.alphacoatingtech.com/wp-content/uploads/2017/03/epoxy-gray.jpg";


  constructor(
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

  getImg(img: any){
    if(img == null){
      return this.default_img;
    }
    else{
      return img;
    }
  }

}
