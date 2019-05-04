import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarActivosComponent } from './buscar-activos/buscar-activos.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearActualizarActivoComponent } from './crear-actualizar-activo/crear-actualizar-activo.component';
import { AreasComponent } from './areas/areas.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
	{path: '', component: InicioComponent},
	{path: 'inicio', component: InicioComponent},
	{path: 'buscarActivos', component: BuscarActivosComponent},
	{path: 'crearActualizarActivo', component: CrearActualizarActivoComponent},
	{path: 'buscarAreas', component: AreasComponent},
	{path: 'buscarPersonas', component: PersonasComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
