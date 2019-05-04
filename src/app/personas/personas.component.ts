import { Component, OnInit } from '@angular/core';
import { PersonasServiceService } from '../personas-service.service';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: any;
  constructor(public personasService: PersonasServiceService) { }

  ngOnInit() {
  	this.listarPersonas();
  }

  listarPersonas(){
  	this.personasService.listarPersonas().then(data => {
  		console.log(data);
  		this.personas=data;
  	});
  }

}
