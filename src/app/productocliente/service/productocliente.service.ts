import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class ProductoClienteService{
    
    private apiUrl = 'https://progreso-express.herokuapp.com/producto'
    constructor(private http: HttpClient) {      

    }
    
    getProductos(): Observable<any[]> {
     return this.http.get<any[]>(this.apiUrl+'/productos');
      }
}