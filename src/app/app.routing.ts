import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductoclienteComponent } from './productocliente/productocliente.component';
import { ClienteloginComponent } from './clientelogin/clientelogin.component';
import { PedidoclienteComponent } from './pedidocliente/pedidocliente.component';
import { FacturasadminComponent } from './facturasadmin/facturasadmin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const appRoutes = [
    { path: 'login', component: LoginComponent,  pathMatch: 'full'},
    { path: 'registro', component: RegistroComponent,  pathMatch: 'full'},
    { path: 'cliente', component: ClientesComponent,  pathMatch: 'full'},
    { path: 'producto', component: ProductoComponent,  pathMatch: 'full'},
    { path: 'facturasadmin', component: FacturasadminComponent, pathMatch: 'full'},
    { path: 'crearProducto', component: CrearProductoComponent, pathMatch: 'full'},
    { path: 'editarProducto/:idProducto', component: EditarProductoComponent, pathMatch: 'full'},
    { path: 'catalogoProductos', component: ProductoclienteComponent, pathMatch: 'full'},
    { path: 'clientelogin', component: ClienteloginComponent, pathMatch: 'full'},
    { path: 'pedidocliente/:idcliente', component: PedidoclienteComponent, pathMatch: 'full'},
    { path: 'perfil', component: PerfilComponent, pathMatch: 'full'},
    { path: '**', component: InicioComponent, pathMatch: 'full'}
  ];

export const routing = RouterModule.forRoot(appRoutes);
