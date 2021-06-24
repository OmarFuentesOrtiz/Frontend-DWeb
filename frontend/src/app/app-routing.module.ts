import { NgModule } from '@angular/core';
import { AnfitrionComponent } from './components/anfitrion/anfitrion.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { RegistrarComponent }from './components/registrar/registrar.component';
import { LogeandoComponent } from'./components/logeando/logeando.component';
import { RouterModule, Routes } from '@angular/router';
import {ServicioFormComponent} from "./components/servicio-form/servicio-form.component";
import {PagoFormComponent} from "./components/pago-form/pago-form.component";
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalleAnfitrionComponent } from './components/detalle-anfitrion/detalle-anfitrion.component';
import { DetalleServicioComponent } from './components/detalle-servicio/detalle-servicio.component';

const routes: Routes = [
  { path: '', component: LogeandoComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'usuario/:id/detalleAnfitrion/:aid', component: DetalleAnfitrionComponent},
  { path: 'usuario/:id/detalleServicio/:sid', component: DetalleServicioComponent},
  { path: 'usuario/:id/servicios', component: ServicioComponent },
  { path: 'usuario/:id/anfitrion', component: AnfitrionComponent },
  { path: 'login', component: LogeandoComponent},
  { path: ':id/servicioForm', component: ServicioFormComponent},
  { path: 'pagoForm', component: PagoFormComponent},
  { path: ':id/perfil', component: PerfilComponent},
  { path: 'pagoForm', component: PagoFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
