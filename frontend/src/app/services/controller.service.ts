import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private API = "https://app-neo-adventura.herokuapp.com/neo-adventura/v1/";

  constructor(private http: HttpClient) { }

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
}
