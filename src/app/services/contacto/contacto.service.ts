import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private API_SERVER = "https://spring-relations-production.up.railway.app/contactos/";

  constructor(private httpClient: HttpClient) { }


  public getAllContactos(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveContacto(contacto: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, contacto);
  }

  public deleteContacto(id:any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

}
