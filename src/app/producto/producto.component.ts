import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';
import { ProductoService } from './productoService/producto.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos!:any[];

  constructor(public productoService: ProductoService,
     public router: Router) { }
  
    eliminarProducto(id:string){
    
       this.productoService.eliminar(id).subscribe(data =>{
         console.log(data);
         //LLAMAR A ELIMINAR LOS ALUMNOS QUE ESTEN EN ESE PROYECTO;
         window.location.reload();
       });
    }
    ngOnInit(): void {
  
      this.productoService.getProductos()
      .pipe(
        tap((productos: any[]) =>{
          this.productos = productos;
        })
      )
      .subscribe();
      
        Swal.fire({
          title:"Cargando datos por favor espere...",
          timer:2000,
          didOpen: ()=>{
            Swal.showLoading();
          }
        });
    }

}
