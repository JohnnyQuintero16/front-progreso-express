import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes!:any[];
  
  constructor(public userService: UserService,
    public router: Router ) { }

  ngOnInit(): void {
    this.userService.getUsuarios()
    .pipe(
      tap((clientes: any[]) =>{
        this.clientes =  clientes;
      })
    ).subscribe();
  }

}
