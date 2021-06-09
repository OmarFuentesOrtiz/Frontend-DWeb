import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { MaterialModule } from '../material/material.module';
import { AnfitrionComponent } from './anfitrion/anfitrion.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListServiciosComponent,
    AnfitrionComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    ChartsModule,
    ListServiciosComponent,
    MaterialModule,
  ]
})
export class ComponentModule { }
