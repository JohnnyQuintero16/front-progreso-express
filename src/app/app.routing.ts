import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { AppComponent } from './app.component';
import { TareaComponent } from './tarea/tarea.component';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductoclienteComponent } from './productocliente/productocliente.component';
import { ClienteloginComponent } from './clientelogin/clientelogin.component';
import { PedidoclienteComponent } from './pedidocliente/pedidocliente.component';
import { FacturasadminComponent } from './facturasadmin/facturasadmin.component';

const appRoutes = [
    { path: 'login', component: LoginComponent,  pathMatch: 'full'},
    { path: 'registro', component: RegistroComponent,  pathMatch: 'full'},
    { path: 'cliente', component: ClientesComponent,  pathMatch: 'full'},
    { path: 'producto', component: ProductoComponent,  pathMatch: 'full'},
    { path: 'facturasadmin', component: FacturasadminComponent, pathMatch: 'full'},
    { path: 'tarea', component: TareaComponent, pathMatch: 'full'},
    { path: 'crearTarea', component: CrearTareaComponent, pathMatch: 'full'},
    { path: 'catalogoProductos', component: ProductoclienteComponent, pathMatch: 'full'},
    { path: 'clientelogin', component: ClienteloginComponent, pathMatch: 'full'},
    { path: 'pedidocliente/:idcliente', component: PedidoclienteComponent, pathMatch: 'full'},
    { path: '**', component: InicioComponent, pathMatch: 'full'}
  ];

export const routing = RouterModule.forRoot(appRoutes);




