import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { crearProductoService } from './crearProductoService/crearProductoService';
import { usuario } from '../user/usuario.interface';
import { tap } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from'sweetalert2';



@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  // LOS VALORES QUE IRAN EN EL FORM
  id!:number;
  nombre!:string;
  cantidad!:number;
  precioVenta!:number;
  precioCompra!:number;
  imgUrl!:string;
  marca!:string;
  categoria!:string;
  estado!:string;

categorias= [
  {id:1,value:"toallas"},
  {id:2,value:"jabones"},
  {id:3,value:"aluminios"},
  {id:4,value:"embloplast"},
  {id:5,value:"encendedores"},
  {id:6,value:"copitos"},
  {id:7,value:"desinfectantes"},
  {id:8,value:"protectores"},
  {id:9,value:"esponjas"},
  {id:10,value:"cintas"},
  {id:11,value:"algodon"},
]
  constructor(public crearProductoService : crearProductoService) { }

  crearProducto(){
    const producto ={
      id:0,
      nombre : this.nombre,
      cantidad : this.cantidad,
      precioVenta: this.precioVenta,
      precioCompra: this.precioCompra,
      imgUrl: this.imgUrl,
      estado:"activo",
      marca: this.marca,
      categoria: this.categoria
    }
    if(producto.nombre === undefined || producto.cantidad === undefined || producto.precioCompra === undefined 
    || producto.precioVenta === undefined || producto.imgUrl === undefined || producto.marca === undefined ||
    producto.categoria === undefined){
      Swal.fire({
        title:"Error",
        text: "Los campos estan mal digitados, por favior verifica",
        icon:"error",
        confirmButtonColor:"red"
      })
    }
    this.crearProductoService.crearProducto(producto).subscribe(data =>{
      Swal.fire({
        title:"Guardando Información",
        timer:1800,
        didOpen: ()=>{
          Swal.showLoading();
        }
      }).then(()=>{
        Swal.fire({
          title: 'Exitoso!',
          text: "El producto ha sido guardado!",
          icon: 'success',
          confirmButtonColor: 'green',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            location.pathname = "producto";
          }
        })
      })
      
    })
  }
  ngOnInit(): void {
  }

}
