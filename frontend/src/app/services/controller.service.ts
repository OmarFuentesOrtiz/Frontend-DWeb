import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UpUsuario} from "../model/up-usuario";
import {ServicioForm} from "../model/servicio-form";

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private API = "https://app-neo-adventura.herokuapp.com/neo-adventura/v1/";

  constructor(private http: HttpClient) { }

  getAllUsuarios(){
    return this.http.get(this.API+'usuarios')
  }
  getAllRegiones() {
    return this.http.get(this.API+'regions')
  }
  getAllPaises() {
    return this.http.get(this.API+'paises')
  }
  getAllPlataformas() {
    return this.http.get(this.API+'plataformas')
  }
  getAllModalidades() {
    return this.http.get(this.API+'modalidades')
  }

  getAllRoles() {
    return this.http.get(this.API+'roles')
  }

  getAllCurrencys() {
    return this.http.get(this.API+'currencys')
  }
  getAllMetodos() {
    return this.http.get(this.API+'metodos')
  }

  getAllIdiomas() {
    return this.http.get(this.API+'idiomas')
  }
  getUsuarioById(id: number){
    return this.http.get(this.API+'usuarios' + '/' + id)
  }
  getReviews() {
    return this.http.get(this.API + 'reviews')
  }

  getAnfitriones() {
    return this.http.get(this.API+'anfitriones')
  }
  saveUsuario(body: UpUsuario){
    return this.http.put<any>(this.API+'usuarios', body)
  }
  postServicio(body: ServicioForm) {
    return this.http.post<any>(this.API + 'servicios', body)
  }

}

