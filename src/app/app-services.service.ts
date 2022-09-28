import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  constructor(private http:HttpClient) {}
  
  public getobtenerPersona():Observable<any> {
    const url = 'http://127.0.0.1:8080/persona';
    return this.http.get<any>(url);
  }

  public save(persona:Persona):Observable<any>{
    const url = 'http://127.0.0.1:8080/persona';
    return this.http.post<any>(url, persona);
  }

  public delete(id:number):Observable<any>{
    const url = 'http://127.0.0.1:8080/persona';
    return this.http.delete<any>(url +`/${id}`);
  }
}