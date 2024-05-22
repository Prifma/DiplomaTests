import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';
import { MatchDTO } from 'src/models/MatchDTO';
import { ServerService } from 'src/servisec/server';
import { TeamsSingleton } from 'src/singleton/TeamsSingleton';

@Component({
  selector: 'matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  id:number;
  list?:MatchDTO;
  constructor(private r:ActivatedRoute, private router:Router,private server:ServerService){
    this.id = r.snapshot.params['id'];
    this.refresh(0);
  }
  answerIsCome:boolean = false;
  refresh(page:number){
    this.answerIsCome = false
    this.server.getMatches(this.id,page).subscribe({next:(data:any) =>{
      this.list = data as MatchDTO;
      if(page === 0){
        TeamsSingleton.setInstance(this.list.teams!);
      }
      this.buildPages();
      this.answerIsCome = true;
    }
    })
  }
  paggination?:number[];
  buildPages(){
    this.paggination = []
    for(let i:number = 0; i < this.list?.pageCount!; i++){
      this.paggination.push(i);
    }
  }
  Back(){
    this.router.navigate(['leagues']);
  }
  goToMatch(id:number){
    this.router.navigate(['statistic/match',id]);
  }
}
