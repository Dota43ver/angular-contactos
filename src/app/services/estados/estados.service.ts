import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private API_SERVER = "https://spring-relations-production.up.railway.app/estados/";

  constructor(private httpClient: HttpClient) { }

  cargarEstados(id: any): Observable<any> {
    return this.httpClient.get(this.API_SERVER+id);
  }
}
