import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { ListServiciosComponent } from './list-servicios/list-servicios.component';
import { MaterialModule } from '../material/material.module';
import { AnfitrionComponent } from './anfitrion/anfitrion.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    ListServiciosComponent,
    AnfitrionComponent,
    DetalleComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    ChartsModule,
    ListServiciosComponent,
    HeaderComponent,
    MaterialModule,
  ]
})
export class ComponentModule { }
