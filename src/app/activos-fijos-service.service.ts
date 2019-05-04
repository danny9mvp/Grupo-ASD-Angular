import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ActivosFijosServiceService {

  constructor(public http: HttpClient) { }

  listarActivos(){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/activos/todos").subscribe(data => {
  			console.log("Solicitando todos los activos...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }
  listarActivosPorTipo(tipo){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/activos/tipo/"+tipo).subscribe(data => {
  			console.log("Solicitando activos del tipo "+tipo+"...");
  			resolve(data);
  		}, err =>{
  			console.log(err);
  		});
  	});
  }

  listarActivosPorFecha(fechaDeCompra){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/activos/fechaDeCompra/"+fechaDeCompra).subscribe(data => {
  			console.log("Solicitando activos con fecha de compra "+fechaDeCompra+"...");
  			resolve(data);
  		}, err =>{
  			console.log(err);
  		});
  	});
  }

  listarActivosPorSerial(serial){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{		
		this.http.get("http://localhost:8080/PruebaTecnica/activos/numeroDeSerie/"+serial).subscribe(data => {
			console.log("Solicitando activos con número de serie "+serial+"...");
			resolve(data);
		}, err => {
			console.log(err);
		});
  	});
  }

  listarSeriales(){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/activos/listarSeriales").subscribe(data => {
  			console.log("Listando seriales...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

  listarIds(){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/activos/listarIds").subscribe(data =>{
  			console.log("Listando Ids...");
  			resolve(data);
  		}, err =>{
  			console.log(err);
  		});
  	})
  }

  buscarActivo(id){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/activos/activoFijo/"+id).subscribe(data =>{
  			console.log("Buscando activo con id ="+id+" ...");
  			resolve(data);
  		}, err =>{
  			console.log(err);
  		});
  	})
  }

  crearActivo(activo){
  	let headers = new HttpHeaders({'Accept': 'text/javascript', 'ContentType': 'application/json'});
  	return new Promise(resolve =>{
  		this.http.post("http://localhost:8080/PruebaTecnica/activos/crearActivoFijo", activo).subscribe(data => {
  			console.log("Enviando petición para crear nuevo Activo Fijo...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

  actualizarActivo(activo){
  	let headers = new HttpHeaders({'Accept': 'text/javascript', 'ContentType': 'application/json'});
  	return new Promise(resolve =>{
  		this.http.put("http://localhost:8080/PruebaTecnica/activos/actualizarActivoFijo/"+activo.id, activo).subscribe(data => {
  			console.log("Enviando petición para actualizar Activo Fijo...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

  cambiarInventarioFechaBaja(id,datos){
  	let headers = new HttpHeaders({'Accept': 'text/javascript', 'ContentType': 'application/json'});
  	return new Promise(resolve =>{
  		this.http.put("http://localhost:8080/PruebaTecnica/activos/actualizarSerialInternoYFechaDeBaja/"+id, datos).subscribe(data => {
  			console.log("Enviando petición para cambiar # de inventario y fecha de baja del Activo Fijo...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }
}
