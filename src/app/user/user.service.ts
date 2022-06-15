import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from "ngx-cookie-service";
import { usuario } from "./usuario.interface";
@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  private apiUrl = 'http://localhost:8080/usuario'
  constructor(private http: HttpClient, private cookies: CookieService) { 

  }
  login(user: any):Observable<any>{
    return this.http.post(this.apiUrl+'/login', user);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl+'/guardar', user);
  }

  getUsuarios(): Observable<usuario[]>{
     return this.http.get<usuario[]>(this.apiUrl+'/usuarios');
  }

  setRol(rol: any){
    this.cookies.set("rol", rol);
  }

  getRol(){
    return this.cookies.get("rol");
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}