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
  estados : string[] = ["Activo", "Dado de baja", "En reparación", "Disponible", "Asignado"];
  formCrear : FormGroup;
  constructor(public activosFijosService: ActivosFijosServiceService, public formBuilder: FormBuilder) {
  		this.formCrear = formBuilder.group({nombre:['', Validators.required], descripcion:['', Validators.required], 
  			tipo:['--Tipo', Validators.required], serial:[''], numeroInventario:[''],alto:[''],largo:[''],ancho:[''],peso:[''],
  			valorCompra:[''], fechaCompra:[''], fechaBaja:[''], estadoActual:['--Estado actual', Validators.required], color:['']});
  		console.log(this.formCrear);
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

}
