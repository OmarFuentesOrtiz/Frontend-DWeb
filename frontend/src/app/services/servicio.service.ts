import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IServicio } from '../interface/interface-servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  getServicios(): Observable<IServicio[]>{
    return this.http.get<IServicio[]>(`${environment.apiUrl}servicios`).pipe(
      catchError(e => {
        return throwError(e);
      })
    )
  }
  /*postServicios(servicio: IServicio): Observable<>{
    
  }*/
  
}
