import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private API_SERVER = "https://spring-relations-production.up.railway.app/pais/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPaises(): Observable<any> {
    return this.httpClient.get(this.API_SERVER)
  }
}
