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

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${environment.apiUrl}servicios`).pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }
  /*postServicios(servicio: IServicio): Observable<>{
    
  }*/
  
}
