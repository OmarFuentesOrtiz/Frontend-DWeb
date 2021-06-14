import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { MaterialModule } from '../material/material.module';
import { AnfitrionComponent } from './anfitrion/anfitrion.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ServicioFormComponent } from './servicio-form/servicio-form.component';
import { PagoFormComponent } from './pago-form/pago-form.component';

@NgModule({
  declarations: [
    ListServiciosComponent,
    AnfitrionComponent,
    DetalleComponent,
    HeaderComponent,
    ServicioFormComponent,
    PagoFormComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    ChartsModule,
    ListServiciosComponent,
    HeaderComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class ComponentModule { }
