
import { Component,Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeroModel } from 'src/models/HeroModel';
import { MatchModel } from 'src/models/MatchModel';
import { ProInfoModel } from 'src/models/ProInfoModel';
import { ServerService } from 'src/servisec/server';

@Component({
  selector: 'app-dota-match',
  templateUrl: './dota-match.component.html',
  styleUrls:[`./dota-match.component.css`]
})
export class DotaMatchComponent {
  sub:Subscription;
    constructor(private server:ServerService, routes:ActivatedRoute, private router:Router){
      this._id = routes.snapshot.params[`id`];
      this.matchRecive = false;
      this.getMatch();
      
     this.sub = router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this._id = routes.snapshot.params[`id`];
          this.matchRecive = false;
          this.getMatch();
        }
        
    })
    }
    ngOnDestroy(){
      this.sub.unsubscribe();
    }
    matchExist:boolean = false;
    matchRecive:boolean = false;
    
    _id:number = 0;

    model:MatchModel = new MatchModel;
    radiantHero:HeroModel[] = [];
    direHero:HeroModel[] = [];
    direTeam?:ProInfoModel;
    radiantTeam?:ProInfoModel;
    getMatch(){
      this.server.getMatch(this._id).subscribe({next:(data:any) => {
        this.matchRecive = true;
        this.model=data;
        this.direTeam = this.model.dire.proModel;
        this.radiantTeam = this.model.radiant.proModel;
        if(this.model.matchId === null){
          this.matchExist = false;
          return;
        }
        this.matchExist = true;
        let k:HeroModel[] =[];
        for (let index = 0; index < 5; index++) {
          const element = this.model.heroes[index];
          k.push(element);
        }
        this.radiantHero = k;
        let j:HeroModel[] =[];
        for (let index = 5; index < 10; index++) {
          const element = this.model.heroes[index];
          j.push(element);
        }
        this.direHero=j
        
      }});
    }
    
}