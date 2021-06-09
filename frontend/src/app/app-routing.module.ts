import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnfitrionComponent } from './components/anfitrion/anfitrion.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ServicioComponent } from './components/servicio/servicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/servicio', pathMatch: 'full'},
  { path: 'servicio', component: ServicioComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'anfitrion', component: AnfitrionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
