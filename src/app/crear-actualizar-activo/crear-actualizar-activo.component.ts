import { Component, OnInit } from '@angular/core';
import { ActivosFijosServiceService } from '../activos-fijos-service.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-crear-actualizar-activo',
  templateUrl: './crear-actualizar-activo.component.html',
  styleUrls: ['./crear-actualizar-activo.component.css']
})
export class CrearActualizarActivoComponent implements OnInit {  
  tipos : string[] = ["Construcciones", "Terrenos y bienes naturales", "Maquinaria", "Mobiliario","Propiedad, planta y equipo","Marca", 
  "Patente", "Franquicia", "Licencias y permisos"];
  ids : any;
  idSeleccionado : string;
  activoEncontrado: any;
  estados : string[] = ["Activo", "Dado de baja", "En reparación", "Disponible", "Asignado"];
  formCrear : FormGroup;
  formActualizar : FormGroup;
  formCambiarSerialInternoFechaBaja : FormGroup;
  constructor(public activosFijosService: ActivosFijosServiceService, public formBuilder: FormBuilder) {
  		this.activosFijosService.listarIds().then(data =>{
  			this.ids = data;
  		});
  		this.formCrear = formBuilder.group({nombre:['', Validators.required], descripcion:['', Validators.required], 
  			tipo:['', Validators.required], serial:[''], numeroInventario:[''],alto:[''],largo:[''],ancho:[''],peso:[''],
  			valorCompra:[''], fechaCompra:[''], fechaBaja:[''], estadoActual:['', Validators.required], color:['']});
  		
  			this.formActualizar = this.formBuilder.group({nombre:['',Validators.required], descripcion:['', Validators.required], 
  			tipo:['', Validators.required], serial:[''], numeroInventario:[''],alto:[''],largo:[''],ancho:[''],peso:[''],
  			valorCompra:[''], fechaCompra:[''], fechaBaja:[''], estadoActual:['', Validators.required], color:['']});
  		this.formCambiarSerialInternoFechaBaja = formBuilder.group({numeroInventario:['', Validators.required], 
  			fechaBaja:['', Validators.required]});
  		console.log(this.formCrear.valid);
  		console.log(this.formActualizar.valid);
  		console.log(this.formCambiarSerialInternoFechaBaja.valid); 	
   }
   fechaCompraMayorQueFechaBajaCrear(){

   		let fechaCompra = this.formCrear.controls.fechaCompra.value;
   		let fechaBaja = this.formCrear.controls.fechaBaja.value;
   		if(fechaCompra != null && fechaCompra != null){
   			if(fechaCompra >= fechaBaja){
   				return true;
   			}
   			else{
   				return false;
   			}
   		}   		
   }

   fechaCompraMayorQueFechaBajaActualizar(){
   		let fechaCompra = this.formActualizar.controls.fechaCompra.value;
   		let fechaBaja = this.formActualizar.controls.fechaBaja.value;
   		if(fechaCompra != null && fechaCompra != null){
   			if(fechaCompra >= fechaBaja){
   				return true;
   			}
   			else{
   				return false;
   			}
   		}   		
   }

  ngOnInit() {
  }

  crearActivo(){
  	let activo = {
  		nombre : this.formCrear.controls.nombre.value,
  		descripcion : this.formCrear.controls.descripcion.value,
  		tipo : this.formCrear.controls.tipo.value,
  		serial : this.formCrear.controls.serial.value,
  		numeroInventario : this.formCrear.controls.numeroInventario.value,
  		alto : parseFloat(this.formCrear.controls.alto.value),
  		largo : parseFloat(this.formCrear.controls.largo.value),
  		ancho : parseFloat(this.formCrear.controls.ancho.value),
  		peso : parseFloat(this.formCrear.controls.peso.value),
  		valorCompra : Number(this.formCrear.controls.valorCompra.value),
  		fechaCompra : this.formCrear.controls.fechaCompra.value,
  		fechaBaja : this.formCrear.controls.fechaBaja.value,
  		estadoActual : this.formCrear.controls.estadoActual.value,
  		color : this.formCrear.controls.color.value
  	}
  	this.activosFijosService.crearActivo(activo).then(data => {
  		console.log(data);
  	});
  }
  buscarActivo(){
  	this.activosFijosService.buscarActivo(parseInt(this.idSeleccionado)).then(data =>{
  		console.log(data);
  		this.activoEncontrado = data;  		
  	});
  }
  actualizarActivo(){
  	let activoActualizado = {
  		id : parseInt(this.idSeleccionado),
  		nombre : this.formActualizar.controls.nombre.value,
  		descripcion : this.formActualizar.controls.descripcion.value,
  		tipo : this.formActualizar.controls.tipo.value,
  		serial : this.formActualizar.controls.serial.value,
  		numeroInventario : this.formActualizar.controls.numeroInventario.value,
  		alto : parseFloat(this.formActualizar.controls.alto.value),
  		largo : parseFloat(this.formActualizar.controls.largo.value),
  		ancho : parseFloat(this.formActualizar.controls.ancho.value),
  		peso : parseFloat(this.formActualizar.controls.peso.value),
  		valorCompra : Number(this.formActualizar.controls.valorCompra.value),
  		fechaCompra : this.formActualizar.controls.fechaCompra.value,
  		fechaBaja : this.formActualizar.controls.fechaBaja.value,
  		estadoActual : this.formActualizar.controls.estadoActual.value,
  		color : this.formActualizar.controls.color.value
  	}
  	this.activosFijosService.actualizarActivo(activoActualizado).then(data =>{
  		console.log(data);
  	})
  }

  cambiarInventarioFechaBaja(){
  	let datos = {
  		serial: this.formCambiarSerialInternoFechaBaja.controls.numeroInventario.value,
  		fechaBaja : new Date(this.formCambiarSerialInternoFechaBaja.controls.fechaBaja.value)
  	}
  	this.activosFijosService.cambiarInventarioFechaBaja(this.idSeleccionado ,datos).then(data =>{
  		console.log(data);
  	})
  }

}
