import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from "ngx-cookie-service";
import { tarea } from '../interface/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:3002'
  constructor(private http: HttpClient) { 

  }

  getTareas(id:string): Observable<any[]> {
    
    return this.http.get<any[]>(`${this.apiUrl}/tasks/${id}`);
  }

  eliminar(id:string): Observable<any>{

    return this.http.post(`${this.apiUrl}/tasks/delete/${id}`, null);
  }

  editarTarea(id:string, observacion:string): Observable<any>{
    console.log('la observacion es ',observacion)
    const date =  new Date();
    const fe = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
    const edit = {
      id: id,
      estado: 2,
      observaciones: observacion,
      fecha_fin: fe
    }
    return this.http.post(`${this.apiUrl}/tasks/edit/`, edit);
  }
//   setToken(token: any) {
//     this.cookies.set("token", token);
//   }
//   getToken() {
//     return this.cookies.get("token");
//   }
}