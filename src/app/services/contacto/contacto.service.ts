import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private API_SERVER = "http://localhost:8080/contactos/";

  constructor(private httpClient: HttpClient) { }


  public getAllContactos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveContacto(contacto: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, contacto);
  }

}
