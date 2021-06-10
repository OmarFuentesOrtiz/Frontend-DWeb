import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { MaterialModule } from '../material/material.module';
import { AnfitrionComponent } from './anfitrion/anfitrion.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListServiciosComponent,
    AnfitrionComponent,
    DetalleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ChartsModule,
    ListServiciosComponent,
    HeaderComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentModule { }
