import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductoComponent } from './producto/producto.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductoclienteComponent } from './productocliente/productocliente.component';
import { CarritocompraComponent } from './carritocompra/carritocompra.component';
import { SidebarclienteComponent } from './sidebarcliente/sidebarcliente.component';
import { ClienteloginComponent } from './clientelogin/clientelogin.component';
import { PedidoclienteComponent } from './pedidocliente/pedidocliente.component';
import { FacturasadminComponent } from './facturasadmin/facturasadmin.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    SidebarComponent,
    CrearProyectoComponent,
    CrearProductoComponent,
    ProductoComponent,
    ClientesComponent,
    ProductoclienteComponent,
    CarritocompraComponent,
    SidebarclienteComponent,
    ClienteloginComponent,
    PedidoclienteComponent,
    FacturasadminComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
