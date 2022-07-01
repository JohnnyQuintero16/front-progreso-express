import { Component, OnInit } from '@angular/core';
import { crearProyectoService } from './crearProyectoService/crearProyecto.service';
import { UserService } from '../user/user.service';
import { usuario } from '../user/usuario.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrls: ['./crear-proyecto.component.css']
})

export class CrearProyectoComponent implements OnInit{

  // LOS VALORES QUE IRAN EN EL FORM
  nombre!:string;
  descripcion!:string;
  //para los usuarios que se obtienen seleccionados
  usuariosSelected!:string[];
  //para saber quien es lider
  Eslider!:string;

  //para los usuarios
  usuarios!:usuario[];

  constructor(public crearProyectoService : crearProyectoService,
    public userService : UserService) { }//

  
  // asociar(id_proyecto_creado:string){
      
//  }

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


