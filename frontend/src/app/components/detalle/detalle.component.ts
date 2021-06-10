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
      modalidad: 'Consulta', 
      region: 'Lima',
      plataforma: 'Zoom',
      usuario: 'usuario 1',
      name: 'Viajes a las ruinas de Chan Chan',
      init_valid_date: '10/06/2021',
      end_valid_date: '10/06/2021',
      price: 200,  
    }

  }

  createReserva() {
    true;
  }


  

}
