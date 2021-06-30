import { Component, OnInit } from '@angular/core';
import {ControllerService} from "../../services/controller.service";
import { FormGroup } from '@angular/forms';
import { Review } from 'src/app/model/review';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  public ReviewForm: FormGroup;

  submitted = false;
  constructor(private route: ActivatedRoute,private controllerService:ControllerService) { }
  usuarioId:number;
  servicioId:number;
  ngOnInit(): void {
    this.usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    this.servicioId = Number(this.route.snapshot.paramMap.get('sid'));
  }

  model = new Review();

  onSubmit() {
    this.submitted = true;
    this.model.servicio_id=this.servicioId;
    this.model.usuario_id=this.usuarioId;
    this.controllerService.postReview(this.model)
        .subscribe((result:any)=> this.model = result.data)
  }
  createReport() {
    false;
  }
  
}
