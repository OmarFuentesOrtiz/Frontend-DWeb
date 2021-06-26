import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { UpUsuario} from "../model/up-usuario";
import { ServicioForm} from "../model/servicio-form";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Anfitrion } from '../model/anfitrion';
import { Usuario } from '../model/Usuario';
import { Servicio } from '../model/Servicio';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  private API = "https://app-neo-adventura.herokuapp.com/neo-adventura/v1/";
  //private API = "http://localhost:8081/neo-adventura/v1/";

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

  getAnfitriones(): Observable<Anfitrion[]> {
    return this.http.get<Anfitrion[]>(this.API+'anfitriones')
    .pipe(
      catchError(this.handleError<Anfitrion[]>('Get anfitriones',))
    );
  }

  getAnfitrionById(id: number):  Observable<Anfitrion> {
    return this.http.get<Anfitrion>(this.API+'anfitriones'+ '/' + id)
    .pipe(
      catchError(this.handleError<Anfitrion>('Get anfitrion',))
    );
  }

  getServiciosByAnfitrionId(id: number): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.API+'servicios'+'/'+'anfitrion'+'/'+ id)
    .pipe(
      catchError(this.handleError<Servicio[]>('Get servicios by anfitrion',))
    )
  }
  saveUsuario(body: UpUsuario): Observable<{}>{
    return this.http.put<UpUsuario>(this.API+'usuarios', body)
    .pipe(
      tap(_=>window.alert('Usuario guardado satifactoriamente.')),
      catchError(this.handleError<UpUsuario>('Save Usuario',))
    );
  }

  postServicio(body: ServicioForm): Observable<{}> {
    return this.http.post<ServicioForm>(`${this.API}servicios`, body)
    .pipe(
      tap(_ => window.alert('Servicio creado satisfactoriamente')),
      catchError(this.handleError<ServicioForm>('postServicios',))
    );
  }

  getAllServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.API}servicios`)
    .pipe(
      catchError(this.handleError<Servicio[]>('getServicios []',))
    );
  }

  getServicio(id: number): Observable<Servicio>{
    return this.http.get<Servicio>(`${this.API}servicios/${id}`)
    .pipe(
      catchError(this.handleError<Servicio>('getServicios by Id',))
      );
  }

  private handleError<T>(operation = 'operation', result?:T){
    return(error:any): Observable<T> => {
      window.alert(`Operacion ${operation} failed`); //senf the error to logging infraestructure
      return of(result as T);
    };
  }
}

