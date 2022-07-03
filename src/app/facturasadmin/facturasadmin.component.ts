import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { FacturasadminService } from './service/facturasadmin.service';

@Component({
  selector: 'app-facturasadmin',
  templateUrl: './facturasadmin.component.html',
  styleUrls: ['./facturasadmin.component.css']
})
export class FacturasadminComponent implements OnInit {

  facturas!:any[];
  constructor(public facturasadminService:FacturasadminService) { }

  ngOnInit(): void {
    this.facturasadminService.getFacturas().pipe(
      tap((facturas: any[])=>{
        this.facturas = facturas;
      })
    ).subscribe();
    Swal.fire({
      title:"Cargando datos por favor espere...",
      timer:2000,
      didOpen: ()=>{
        Swal.showLoading();
      }
    });
  }

}
