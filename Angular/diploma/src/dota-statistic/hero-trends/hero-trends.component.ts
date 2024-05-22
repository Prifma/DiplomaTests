import { Component,Input,EventEmitter } from '@angular/core';
import { ServerService } from 'src/servisec/server';
import { NgForm} from '@angular/forms';
import { MatchModel } from 'src/models/MatchModel';
import { HeroItems } from 'src/models/HeroItems';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'hero-trends',
  templateUrl: './hero-trends.component.html',
  styleUrls: ['./hero-trends.component.css']
})
export class HeroTrendsComponent {
  @Input() set heroId(id:number){
    
  }
  constructor(private server:ServerService, private r:ActivatedRoute, private router:Router){
    this.refresh(r.snapshot.params['id']);
    }
refresh(id:number){
  this._heroId = this.heroId
    this.answerIsCome = false;
    if(id)
      this.server.getTrends(id).subscribe({next:(data:any) =>{
        this.items = data as HeroItems
        this.answerIsCome = true;
        }});
}
  answerIsCome:boolean = false;
  _heroId:any;
  items?:HeroItems;
  Back(){
    this.router.navigate([`statistic/hero`])
  }
}

