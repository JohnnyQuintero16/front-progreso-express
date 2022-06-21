import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://progreso-express.herokuapp.com/producto'
  constructor(private http: HttpClient) {      

  }

  getProductos(): Observable<any[]> {
    
    return this.http.get<any[]>(this.apiUrl+'/productos');
  }

  eliminar(id:string): Observable<any>{

    return this.http.delete(`${this.apiUrl}/eliminar/${id}`);
  }

  
//   setToken(token: any) {
//     this.cookies.set("token", token);
//   }
//   getToken() {
//     return this.cookies.get("token");
//   }
}