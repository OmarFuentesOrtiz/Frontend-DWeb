import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnfitrionComponent } from './components/anfitrion/anfitrion.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import {RegistrarComponent}from './components/registrar/registrar.component';
import { LogeandoComponent} from'./components/logeando/logeando.component';

const routes: Routes = [
  { path: 'registrar', component: RegistrarComponent },
  { path: '', component: ServicioComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'anfitrion', component: AnfitrionComponent },
  { path: 'login', component: LogeandoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
