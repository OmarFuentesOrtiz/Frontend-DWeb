import { Component, OnInit } from '@angular/core';
import {TwoValModel} from "../../model/two-val-model";
import {PagoForm} from "../../model/pago-form";
import {ControllerService} from "../../services/controller.service";

@Component({
  selector: 'app-pago-form',
  templateUrl: './pago-form.component.html',
  styleUrls: ['./pago-form.component.css']
})
export class PagoFormComponent implements OnInit {

  constructor(private controllerService:ControllerService) { }

  ngOnInit(): void {
    this.getAllMetodos();
    this.getAllCurrencys();
  }

  currencys?:TwoValModel[];
  metodos?:TwoValModel[];

  getAllCurrencys():void {
    this.controllerService.getAllCurrencys()
        .subscribe((result:any)=> this.currencys = result.data)
  }
  getAllMetodos():void {
    this.controllerService.getAllMetodos()
        .subscribe((result:any)=> this.metodos = result.data)
  }

  submitted = false;
  onSubmit() { this.submitted = true; }

  model = new PagoForm();

  newHero() {
    this.model = new PagoForm();
  }

}
