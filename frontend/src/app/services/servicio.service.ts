import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Servicio } from '../model/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //private API = "http://localhost:8089/booking-restaurant/v1/payments/";
  private API = "https://app-neo-adventura.herokuapp.com/neo-adventura/v1/";

  constructor(private http: HttpClient) { }

  getAllServicios() {
    return this.http.get(this.API + 'servicios')
  }

  getServicio(id: number){
    return this.http.get(this.API + 'servicios' +'/' + id)
  }

  /*postServicios(servicio: IServicio): Observable<>{
  }*/
  
}
