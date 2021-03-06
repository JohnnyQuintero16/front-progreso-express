import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { PedidoclienteserviceService } from './pedidoclienteservice/pedidoclienteservice.service';

@Component({
  selector: 'app-pedidocliente',
  templateUrl: './pedidocliente.component.html',
  styleUrls: ['./pedidocliente.component.css']
})
export class PedidoclienteComponent implements OnInit {

  facturas!:any[];

  constructor(public pedidoclienteserviceService:PedidoclienteserviceService,
    public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get("idcliente"));
      this.pedidoclienteserviceService.getPedidosCliente(params.get("idcliente"))
      .pipe(
          tap((facturas: any[]) =>{
            this.facturas = facturas;
          })
          
      )
      .subscribe();
    }); 
    Swal.fire({
      title:"Cargando datos por favor espere...",
      timer:4000,
      didOpen: ()=>{
        Swal.showLoading();
      }
    });
      
      
  }

}
function id(id: any) {
  throw new Error('Function not implemented.');
}

