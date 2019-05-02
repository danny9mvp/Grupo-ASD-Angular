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
}
