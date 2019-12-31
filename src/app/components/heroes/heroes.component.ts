import { Component, OnInit } from '@angular/core';
import { HeroresService, Heroe } from '../../servicios/herores.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  constructor(private _heroresService:HeroresService) { }

  ngOnInit() {
    this.heroes=this._heroresService.getHeroes();
    console.log(this.heroes);
      
  }


}
