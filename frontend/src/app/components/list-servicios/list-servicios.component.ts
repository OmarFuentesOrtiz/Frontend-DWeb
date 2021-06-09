import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-list-servicios',
  templateUrl: './list-servicios.component.html',
  styleUrls: ['./list-servicios.component.css']
})
export class ListServiciosComponent implements OnInit {

  servicios = [
    {
      name: 'Viajes a las ruinas de Chan Chan',
      id: 1,
      modalidad: 'Guia turística',
      region: 'Lima',
      plataforma: 'Zoom',
      usuario: 'Pedro Picapiedra',
      dueDate: '03/05/2021',
      type: 'Done'
    },
    {
      name: 'Viajes a las Macchu Picchu',
      id: 1,
      modalidad: 'Guia turística',
      region: 'Cuzco',
      plataforma: 'Google Meets',
      usuario: 'Pablo',
      dueDate: '03/05/2021',
      type: 'Done'
    }
  ]
  constructor(private ServicioService: ServicioService) { }

  ngOnInit(): void {
  }

}
