import { Component, OnInit } from '@angular/core';
import { ReviewForm } from 'src/app/model/review-form';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  public ReviewForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  model = new ReviewForm();

  createReport() {
    false;
  }
  
}
