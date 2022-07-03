import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServicePerfilService } from './service/service-perfil.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  id!:number;
  nombres!: string;
  apellidos!: string;
  clave!:string;
  cellular!:number;
  direccion!:string;
  correo!: string;
  rol!:number;
  userPresent!:any;
  usuarioadmin!:boolean;
  
  constructor(private cookies:CookieService, public servicePerfilService:ServicePerfilService) { }

  actualizarUser(){
    const userUpdate ={
      id:this.id,
      nombres : this.nombres,
      apellidos : this.apellidos,
      cellular: this.cellular,
      direccion : this.direccion,
      correo: this.correo,
      clave: this.clave,
      rol: this.rol
    }
    console.log(userUpdate);

    this.servicePerfilService.actualizarUser(userUpdate).subscribe(data =>{
      Swal.fire({
        title: 'Exitoso!',
        text: "La información se actualizo, debes iniciar sesión de nuevo!",
        icon: 'success',
        confirmButtonColor: 'green',
        confirmButtonText: 'Iniciar sesión'
      }).then((result) => {
        if (result.isConfirmed) {
          location.pathname = "login";
        }
      })
    })
  }
  ngOnInit(): void {
    this.userPresent = JSON.parse(this.cookies.get("usuariosesion"));
    this.id = this.userPresent.id;
    this.nombres = this.userPresent.nombres;
    this.apellidos = this.userPresent.apellidos;
    this.cellular = this.userPresent.cellular;
    this.direccion = this.userPresent.direccion;
    this.correo = this.userPresent.correo;
    this.clave = this.userPresent.clave;
    this.rol = this.userPresent.rol.id;
    if(this.userPresent.rol.id == 1){
      this.usuarioadmin = true;
    }else{
      this.usuarioadmin = false;
    }
  }

}
