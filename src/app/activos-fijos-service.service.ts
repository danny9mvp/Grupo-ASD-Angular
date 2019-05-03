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
  		this.http.get("http://localhost:8080/activos/todos").subscribe(data => {
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
  		this.http.get("http://localhost:8080/activos/tipo/"+tipo).subscribe(data => {
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
  		this.http.get("http://localhost:8080/activos/fechaDeCompra/"+fechaDeCompra).subscribe(data => {
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
		this.http.get("http://localhost:8080/activos/numeroDeSerie/"+serial).subscribe(data => {
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
  		this.http.get("http://localhost:8080/activos/listarSeriales").subscribe(data => {
  			console.log("Listando seriales...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

}
