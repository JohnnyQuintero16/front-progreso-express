import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { crearProductoService } from './crearProductoService/crearProductoService';
import { usuario } from '../user/usuario.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  // LOS VALORES QUE IRAN EN EL FORM
  title!:string;
  descripcion!:string;
  idProyecto!:string;
  usuarioAsignado!:string;
  //para los usuarios
  usuarios!:usuario[];

  constructor(public userService : UserService, public crearProductoService : crearProductoService) { }



  ngOnInit(): void {

    this.userService.getUsuarios()
    .pipe(
        tap((usuarios: usuario[]) =>{
          this.usuarios = usuarios;
          console.log(this.usuarios)
        })
    )
    .subscribe();
  }

}
