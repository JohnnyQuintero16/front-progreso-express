import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasadminService {

  private apiUrl = 'https://progreso-express.herokuapp.com/factura'

  constructor(private http: HttpClient) {      
  }

  getFacturas():Observable<any>{
    return this.http.get(this.apiUrl+'/facturas');
  }
}
