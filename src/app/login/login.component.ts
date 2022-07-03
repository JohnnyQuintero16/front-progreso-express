import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {//implements OnInit {

  correo!: string;
  password!: string;

  constructor(public userService: UserService, public router: Router, private cookie:CookieService) { 
    
  }
  login() {
    const user = {
      correo: this.correo, 
      clave: this.password};
    this.userService.login(user).subscribe( (data) => {
      
      // this.userService.setRol(data.usuario.username) //corregir
      //al hacer login vaya a pagina principal
      
      this.cookie.set("usuariosesion",JSON.stringify(data));

      if(data.rol.id == 1){
        this.router.navigateByUrl('producto');
      }else{
        this.router.navigateByUrl('pedidocliente/' + data.id);
      }
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
