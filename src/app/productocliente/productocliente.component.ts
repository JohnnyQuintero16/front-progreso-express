import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models';


@Component({
  selector: 'app-productocliente',
  templateUrl: './productocliente.component.html',
  styleUrls: ['./productocliente.component.css']
})
export class ProductoclienteComponent implements OnInit {

  @Input()
  producto!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  addCarrito(){
  }
}
