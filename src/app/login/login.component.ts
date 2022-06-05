import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {//implements OnInit {

  correo!: string;
  password!: string;

  constructor(public userService: UserService, public router: Router) { 
    
  }
  login() {
    const user = {
      correo: this.correo, 
      clave: this.password};
    this.userService.login(user).subscribe( (data) => {

      //guardo el token
      // this.userService.setToken(data.body);
      //rol
      
      // this.userService.setRol(data.usuario.username) //corregir
      //al hacer login vaya a pagina principal
      
      this.router.navigateByUrl('proyecto');

      console.log(data);
    },
     (err) =>{
         
          alert('Datos incorrectos!');
          console.log(err);
     }
    );
  }

  
  // ngOnInit(): void {
      
  // }

}
