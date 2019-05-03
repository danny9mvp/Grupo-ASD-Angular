import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarActivosComponent } from './buscar-activos/buscar-activos.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CrearActualizarActivoComponent } from './crear-actualizar-activo/crear-actualizar-activo.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarActivosComponent,
    InicioComponent,
    CrearActualizarActivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
