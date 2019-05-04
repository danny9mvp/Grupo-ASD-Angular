import { Component, OnInit } from '@angular/core';
import { AreasServiceService } from '../areas-service.service';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  areas: any;
  constructor(public areasService: AreasServiceService) { }

  ngOnInit() {
  	this.listarAreas();
  }

  listarAreas(){
  	this.areasService.listarAreas().then(data => {
  		console.log(data);
  		this.areas=data;
  	});
  }

}
