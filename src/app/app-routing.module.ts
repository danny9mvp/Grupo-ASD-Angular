import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarActivosComponent } from './buscar-activos/buscar-activos.component'
import { InicioComponent } from './inicio/inicio.component'

const routes: Routes = [
	{path: '', component: InicioComponent},
	{path: 'inicio', component: InicioComponent},
	{path: 'buscarActivos', component: BuscarActivosComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
