
import { Component,Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatchModel } from 'src/models/MatchModel';
import { ProfileModel } from 'src/models/ProfileModel';
import { RecentMatchModel } from 'src/models/RecentMatchModel';
import { TotalsModel } from 'src/models/TotalsModel';
import { ServerService } from 'src/servisec/server';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  @Input() set playerId(value:number){
    
  }
  sub:Subscription;
  constructor(private server:ServerService, private r:ActivatedRoute, private router:Router){
      this.refresh(r.snapshot.params['id']);
      this.sub = router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
            this.refresh(r.snapshot.params['id']);
        }
        
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  refresh(value:number){
    this._id = value
    this.isCalledP = false;
    this.isCalledR = false;
    this.isCalledT = false;
    this.profileInfo = {};
    this.recentMatches = []
    this.totals=[]
    this.profileExistInDota = false;
    this.infoRecived = false;
    this.change(1)
  }

  _id:number = 0;
  
  profileExistInDota:boolean = false;
  infoRecived:boolean = false;

  profileInfo:ProfileModel = {};
  recentMatches:RecentMatchModel[] = [];
  totals:TotalsModel[] = [];

  currentAction:number = 0;

  isCalledP:boolean = false;
  isCalledR:boolean = false;
  isCalledT:boolean = false;
  
    change(x:number){
      this.currentAction = x;
      this.infoRecived = false;
      switch(x){
        case 1:{
          if(this.isCalledP){this.infoRecived = true}
          else{
            this.isCalledP = true;
            this.server.getPlayer(this._id).subscribe({next:(data:any)=>{
              this.infoRecived = true
              this.profileInfo=data;
              if(this.profileInfo.accountId === null){
                this.profileExistInDota = false;
                return
              }
              this.profileExistInDota = true;
              }});
          }
          break
        }
        case 2:{
          if(this.isCalledR){this.infoRecived = true}
          else{
            this.isCalledR = true;
            this.server.getRecentMatches(this._id).subscribe({next:(data:any)=>{this.recentMatches=data;this.infoRecived = true}});
          }
          break
        }
        case 3:{
          if(this.isCalledT){this.infoRecived = true}
          else{
            this.isCalledT = true;
            this.server.getTotals(this._id).subscribe({next:(data:any)=>{this.totals=data;this.infoRecived = true}});
          }
          break
        }
      }
    }
    

}