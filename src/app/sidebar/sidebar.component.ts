import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public idcliente!:any;
  public userPresent!:any;
  public nombreCliente!:any;
  
  constructor(private route:ActivatedRoute, private cookies:CookieService) { }

  ngOnInit(): void {
    this.userPresent = JSON.parse(this.cookies.get("usuariosesion"));
    this.idcliente = this.userPresent.id;
    this.nombreCliente = this.userPresent.nombres; 
  }
  
}
