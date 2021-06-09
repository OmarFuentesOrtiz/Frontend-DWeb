import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/model/Servicio';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  servicio: Servicio | undefined;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getServicio();
  }

  getServicio(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
  }

}
