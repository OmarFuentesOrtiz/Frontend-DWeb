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

  private API = "http://localhost:8089/booking-restaurant/v1/payments/";

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${environment.apiUrl}servicios`).pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }
  getServicio(id: number){
    return this.http.get(this.API + 'servicios' +'/' + id)
  }

  /*postServicios(servicio: IServicio): Observable<>{
    
  }*/
  
}
