import { Component, OnInit } from '@angular/core';
import {Anfitrion} from "../../model/anfitrion";
import {ControllerService} from "../../services/controller.service";

@Component({
  selector: 'app-anfitrion',
  templateUrl: './anfitrion.component.html',
  styleUrls: ['./anfitrion.component.css']
})
export class AnfitrionComponent implements OnInit {

  constructor(private controllerService:ControllerService) { }

  ngOnInit(): void {
      this.getAllAnfitriones();
  }

  anfitriones?: Anfitrion[];
  value = '';


  getAllAnfitriones(): void {
    this.controllerService.getAnfitriones()
        .subscribe((result: any) =>
        {
          this.anfitriones = result.data
        })
  }

  
  Anfitrionstarts(name: string):boolean {
    if(this.value == ""){
      return true;
    }
    if(name.toLowerCase().startsWith(this.value.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
  }



}
