import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonasServiceService {

  constructor(public http: HttpClient) { }

  listarPersonas(){
  	let headers = new HttpHeaders({'Accept': 'text/javascript'});
  	return new Promise(resolve =>{
  		this.http.get("http://localhost:8080/PruebaTecnica/personas/todos").subscribe(data => {
  			console.log("Solicitando todas las personas...");
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});
  }

}
