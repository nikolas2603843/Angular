import { Component, OnInit } from '@angular/core';
import { HeroresService, Heroe } from '../../servicios/herores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = [];
  constructor(private _heroresService:HeroresService
  private _router:Router){
  }

  ngOnInit() {
    this.heroes=this._heroresService.getHeroes();
    console.log(this.heroes);
      
  }
   verHeroe(idx:number){
this._router.navigate(['/heroe',idx]);
  }


}
