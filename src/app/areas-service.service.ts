import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AreasServiceService {

  constructor(public http: HttpClient) { }

  listarAreas(){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/areas/todos").subscribe(data => {
  			console.log("Solicitando todas las areas...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

}
