import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarActivosComponent } from './buscar-activos/buscar-activos.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearActualizarActivoComponent } from './crear-actualizar-activo/crear-actualizar-activo.component';

const routes: Routes = [
	{path: '', component: InicioComponent},
	{path: 'inicio', component: InicioComponent},
	{path: 'buscarActivos', component: BuscarActivosComponent},
	{path: 'crearActualizarActivo', component: CrearActualizarActivoComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
