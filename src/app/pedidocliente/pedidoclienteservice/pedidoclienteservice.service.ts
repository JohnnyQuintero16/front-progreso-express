import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PedidoclienteserviceService {
  private apiUrl = 'https://progreso-express.herokuapp.com/cliente'

  constructor(private http: HttpClient) {      
  
  }
  getPedidosCliente(id:any): Observable<any[]> { 
    return this.http.get<any[]>(`${this.apiUrl}/factura/${id}`);
  }
}
