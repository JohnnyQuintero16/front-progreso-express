import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { ProductoService } from '../producto/productoService/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  
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

  constructor(private route: ActivatedRoute, public productoService: ProductoService) { }

  updateProducto(){
    const producto ={
      id:this.id,
      nombre : this.nombre,
      cantidad : this.cantidad,
      precioVenta: this.precioVenta,
      precioCompra: this.precioCompra,
      imgUrl: this.imgUrl,
      estado:"activo",
      marca: this.marca,
      categoria: this.categoria
    }
    this.productoService.actualizarProducto(producto).subscribe(data =>{
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
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log();
      this.productoService.getProductos().subscribe(data =>{
        for(let i = 0; i < data.length; i++){
          if(data[i].id == params.get("idProducto")){
            //this.producto = data[i];
            this.id = data[i].id;
            this.nombre = data[i].nombre;
            this.cantidad = data[i].cantidad;
            this.precioCompra = data[i].precioCompra;
            this.precioVenta = data[i].precioVenta;
            this.imgUrl = data[i].imgUrl;
            this.marca = data[i].marca;
            this.categoria = data[i].categoria;
          }
        }
      })
  })
  Swal.fire({
    title:"Cargando datos por favor espere...",
    timer:2000,
    didOpen: ()=>{
      Swal.showLoading();
    }
  });

}
}
