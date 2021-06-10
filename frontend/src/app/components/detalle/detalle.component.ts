import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/Servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public reservaForm: FormGroup;
  public servicio: Servicio = new Servicio();
  private idServicio: number;

  constructor(
    private servicioService: ServicioService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idServicio = Number(this.route.snapshot.paramMap.get('id'));
    this.getServicio();
  }

  getServicio(): void{
    this.servicioService.getServicio(this.idServicio).subscribe(
      (result: any) => {
        this.servicio = result;
      }
    )

    this.servicio = {
      id: 1,
      name: 'Viajes a las ruinas de Chan Chan',
      region: 'Lima',
      modalidad: 'Consulta',
      plataforma: 'Zoom',
      anfitrion: 'Ms. Jack',
      img: 'https://www.peruhop.com/wp-content/uploads/Mascotte-of-Chan-Chan-Small.jpg'
    }

  }

  createReserva() {
    true;
  }


  

}
