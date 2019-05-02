import { Component, OnInit } from '@angular/core';
import { ActivosFijosServiceService } from "../activos-fijos-service.service";
@Component({
  selector: 'app-buscar-activos',
  templateUrl: './buscar-activos.component.html',
  styleUrls: ['./buscar-activos.component.css']
})
export class BuscarActivosComponent implements OnInit {
  todosLosActivos:any;
  constructor(public activosFijosService: ActivosFijosServiceService) { }

  ngOnInit() {
  	this.activosFijosService.listarActivos().then(data =>{
  		this.todosLosActivos = data;
  		console.log(this.todosLosActivos);
  	});  	
  }

}
