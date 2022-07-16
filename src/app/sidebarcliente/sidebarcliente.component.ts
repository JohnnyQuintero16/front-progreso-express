import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebarcliente',
  templateUrl: './sidebarcliente.component.html',
  styleUrls: ['./sidebarcliente.component.css']
})
export class SidebarclienteComponent implements OnInit {

  public idcliente!:any;
  public userPresent!:any;
  public nombreCliente!:any;
  constructor(private route:ActivatedRoute, private cookies:CookieService) { }
  
  ngOnInit(): void {
    this.userPresent = JSON.parse(this.cookies.get("usuariosesion"));
    this.idcliente = this.userPresent.id;
    this.nombreCliente = this.userPresent.nombres;
    /*this.route.paramMap.subscribe((params: ParamMap) => {
      this.idcliente = params.get("idcliente");
      console.log(this.idcliente)
    })*/
  }

}
