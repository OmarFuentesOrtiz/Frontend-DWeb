import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '../material/material.module';
import { AnfitrionComponent } from './anfitrion/anfitrion.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ServicioFormComponent } from './servicio-form/servicio-form.component';
import { PagoFormComponent } from './pago-form/pago-form.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { LogeandoComponent } from './logeando/logeando.component';
import { DetalleServicioComponent } from './detalle-servicio/detalle-servicio.component';
import { DetalleAnfitrionComponent } from './detalle-anfitrion/detalle-anfitrion.component';
import {RegistrarComponent} from "./registrar/registrar.component";
import { MisserviciosComponent } from './misservicios/misservicios.component';

@NgModule({
  declarations: [
    AnfitrionComponent,
    HeaderComponent,
    ServicioFormComponent,
    PagoFormComponent,
    PerfilComponent,
    ReviewFormComponent,
    LogeandoComponent,
    DetalleServicioComponent,
    DetalleAnfitrionComponent,
    RegistrarComponent,
    MisserviciosComponent,
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
    HeaderComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PerfilComponent,
    ReviewFormComponent,
    ServicioFormComponent
  ]
})
export class ComponentModule { }
