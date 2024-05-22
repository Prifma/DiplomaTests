import { Component,Input,EventEmitter } from '@angular/core';
import { ServerService } from 'src/servisec/server';
import { NgForm} from '@angular/forms';
import { MatchModel } from 'src/models/MatchModel';
import { HeroItems } from 'src/models/HeroItems';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Hero } from 'src/models/Hero';

@Component({
  selector: 'hero-pick',
  templateUrl: './hero-pick.component.html',
  styleUrls: ['./hero-pick.component.css']
})
export class HeroPickComponent {
  
  constructor(private server:ServerService, private r:ActivatedRoute, private router:Router){

    server.getHeroes().subscribe({next:(data:any) => {
      this._heroes = data as Hero[];
      this.answerIsCome = true;
    }
    })
  }
  pick(id:any){
    this.router.navigate([`statistic/hero/${id}`])
  }
  answerIsCome:boolean = false;
  _heroes?:Hero[];
  
}

