import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports:[
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
