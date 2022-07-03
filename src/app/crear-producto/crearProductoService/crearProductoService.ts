import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class crearProductoService {

  private apiUrl = 'https://progreso-express.herokuapp.com/producto'
  constructor(private http: HttpClient, private cookies: CookieService) { 

  }
  
  crearProducto(producto: any):Observable<any>{
    return this.http.post(this.apiUrl+'/guardar', producto);
  }


  

  

}