import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models';
import { Router } from '@angular/router';
import { ProductoClienteService } from './service/productocliente.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-productocliente',
  templateUrl: './productocliente.component.html',
  styleUrls: ['./productocliente.component.css']
})
export class ProductoclienteComponent implements OnInit {

  productos!:any[];

  constructor(public productoClienteService: ProductoClienteService,
     public router: Router) { }

  ngOnInit(): void {
    this.productoClienteService.getProductos().pipe(
      tap((productos: any[]) =>{
        this.productos = productos;
      })
    ).subscribe();
  }

  addCarrito(){
  }
}
