import { Component, OnInit } from '@angular/core';
import {TwoValModel} from "../../model/two-val-model";
import {PagoForm} from "../../model/pago-form";
import {ControllerService} from "../../services/controller.service";
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../model/usuario";
import {Servicio} from "../../model/servicio";
import {formatDate, getLocaleDateTimeFormat} from "@angular/common";

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.css']
})
export class PagoFormComponent implements OnInit {

  servicioId: number;
  usuarioId: number;

  usuario: Usuario;
  servicio: Servicio;
  model = new PagoForm();

  constructor(private controllerService:ControllerService, private  route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllMetodos();
    this.getAllCurrencys();

    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUsuario();
    this.servicioId = Number(this.route.snapshot.paramMap.get('sid'));
    this.getServicio();
  }

  currencys?:TwoValModel[];
  metodos?:TwoValModel[];

  getUsuario(): void{
    this.controllerService.getUsuarioById(this.usuarioId)
        .subscribe((result: any) => { this.usuario = result.data })
  }
  getServicio(): void{
    this.controllerService.getServicio(this.servicioId)
        .subscribe((result: any) => { this.servicio = result.data })
  }

  getAllCurrencys():void {
    this.controllerService.getAllCurrencys()
        .subscribe((result:any)=> this.currencys = result.data)
  }
  getAllMetodos():void {
    this.controllerService.getAllMetodos()
        .subscribe((result:any)=> this.metodos = result.data)
  }

  submitted = false;
  onSubmit() {
    this.model.usuario_id = this.usuarioId;
    this.model.servicio_id = this.servicioId;
    this.model.mount = this.servicio.price;
    this.model.pay_date = formatDate(Date.now(), "yyyy-MM-ddThh:mm:ss", "en-US");
    this.controllerService.postPago(this.model)
        .subscribe((result:any)=> this.model = result.data)
    this.submitted = true;
  }

  newHero() {
    this.model = new PagoForm();
  }

}
