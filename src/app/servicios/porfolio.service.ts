import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    console.log('el servicio porfolio esta corriendo');
    return this.http.get(
      'https://porfolio-radike.herokuapp.com/personas/traer'
    );
  }
}
