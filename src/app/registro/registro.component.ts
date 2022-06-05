import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  nombres!: string;
  apellidos!: string;
  clave!:string;
  celular!:number;
  direccion!:string;
  correo!: string;

  constructor(public userService: UserService) {}

  register() {
    const user = {
      nombres: this.nombres, 
      apellidos: this.apellidos, 
      clave: this.clave, 
      cellular: this.celular,
      direccion: this.direccion,
      correo: this.correo,
      rol: 1
    };
    this.userService.register(user).subscribe(data => {
      
      
      location.pathname = 'login';
    }, err => {
      
      alert('Ha ocurrido un error');
      console.log(err)
     });
  }
  ngOnInit(): void {
  }

}
