import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';
import { League } from 'src/models/League';
import { LeagueDTO } from 'src/models/LeagueDTO';
import { ServerService } from 'src/servisec/server';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent {
  constructor(private server:ServerService, private r:Router){
    this.refresh(0);
  }
  list?:LeagueDTO;
  refresh(page:number){
    this.answerIsCome = false;
    this.server.getLeagues(page, this.searchString).subscribe({next:(data:any) => {
      this.list = data as LeagueDTO
      this.searchString = this.list.searchString!;
      this.answerIsCome = true;
      this.buildPages();
    }})
  }
  answerIsCome:boolean = false;
  paggination?:number[];
  buildPages(){
    this.paggination = []
    for(let i:number = 0; i < this.list?.pageCount!; i++){
      this.paggination.push(i);
    }
  }
  goToMatches(id:number){
    this.r.navigate([`leagues/matches`,id])
  }
  searchString:string = "";
  
}
