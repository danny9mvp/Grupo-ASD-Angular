import { Component, OnInit, Input } from '@angular/core';
import { ActivosFijosServiceService } from "../activos-fijos-service.service";
@Component({
  selector: 'app-buscar-activos',
  templateUrl: './buscar-activos.component.html',
  styleUrls: ['./buscar-activos.component.css']
})
export class BuscarActivosComponent implements OnInit { 
  selectedLink:string;
  tipos : string[] = ["Construcciones", "Terrenos y bienes naturales", "Maquinaria", "Mobiliario","Propiedad, planta y equipo","Marca", 
  "Patente", "Franquicia", "Licencias y permisos"];
  tipoSeleccionado: string;
  serialSeleccionado: string;
  numerosSeriales: any;  
  todosLosActivos: any;
  activosPorTipo: any;
  activosPorSerial: any;
  activosPorFechaCompra: any;
  fechaDeCompra: string;
  constructor(public activosFijosService: ActivosFijosServiceService) {
  }

   buscarPorTipo(){
   	this.activosFijosService.listarActivosPorTipo(this.tipoSeleccionado).then(data =>{
   		this.activosPorTipo = data;
   		console.log(this.activosPorTipo);
   	});
   }

   buscarPorFechaDeCompra(){
   	this.activosFijosService.listarActivosPorFecha(this.fechaDeCompra).then(data =>{
   		this.activosPorFechaCompra = data;
   		console.log(this.activosPorFechaCompra);
   	});   	
   }

   buscarPorSerial(){   	
   	this.activosFijosService.listarActivosPorSerial(this.serialSeleccionado).then(data =>{
   		this.activosPorSerial = data;
   		console.log(this.activosPorSerial);
   	});
   }

  ngOnInit() {
  	this.activosFijosService.listarActivos().then(data =>{
  		this.todosLosActivos = data;
  		console.log(this.todosLosActivos);
  	});
  	this.activosFijosService.listarSeriales().then(data =>{
   		this.numerosSeriales=data;
   		console.log(this.numerosSeriales);
   	});  	
  }

  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    } 
}
