import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicePerfilService {
  private apiUrl = 'https://progreso-express.herokuapp.com/usuario'
  constructor(private http: HttpClient) {      
  }

  actualizarUser(usuario:any):Observable<any>{
    return this.http.post(this.apiUrl+'/actualizar',usuario);
  }
}
