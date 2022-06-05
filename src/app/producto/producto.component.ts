import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/internal/operators/tap';
import { ProductoService } from './productoService/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos!:any[];

  constructor(public productoService: ProductoService,
     public router: Router) { }

     getProyectos() {
    
      //   data => {
  
      //   //al hacer login vaya a pagina principal
      //   this.router.navigateByUrl('proyecto');
      //   console.log(data);
      // });
    }
  
    eliminarProyecto(id:string){
    
      // this.proyectoService.eliminar(id).subscribe(data =>{
      //   console.log(data);
      //   //LLAMAR A ELIMINAR LOS ALUMNOS QUE ESTEN EN ESE PROYECTO;
      //   window.location.reload();
      // });
      
    }
    getTareas(id:string){
      // sessionStorage.setItem('idProyectoActual', id);
      // console.log(sessionStorage.getItem('idProyectoActual'))
  
      // this.tareaService.getTareas(id).subscribe(data =>{
      //   //LLAMAR A ELIMINAR LOS ALUMNOS QUE ESTEN EN ESE PROYECTO;
      //   console.log('redireccionaar');
      //   location.pathname = 'tarea';
      // });
      
    }
    ngOnInit(): void {
  
      this.productoService.getProductos()
      .pipe(
          tap((productos: any[]) =>{
            this.productos = productos;
          })
      )
      .subscribe();
    }

}
