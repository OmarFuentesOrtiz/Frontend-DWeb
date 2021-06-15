import { NgModule } from '@angular/core';
import { AnfitrionComponent } from './components/anfitrion/anfitrion.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { RegistrarComponent }from './components/registrar/registrar.component';
import { LogeandoComponent } from'./components/logeando/logeando.component';
import { RouterModule, Routes } from '@angular/router';
import {ServicioFormComponent} from "./components/servicio-form/servicio-form.component";
import {PagoFormComponent} from "./components/pago-form/pago-form.component";

const routes: Routes = [
  { path: '', component: LogeandoComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'servicios', component: ServicioComponent },
  { path: 'anfitrion', component: AnfitrionComponent },
  { path: 'login', component: LogeandoComponent},
  { path: 'servicioForm', component: ServicioFormComponent},
  { path: 'pagoForm', component: PagoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
