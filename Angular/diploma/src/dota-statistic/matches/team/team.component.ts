import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';
import { MatchDTO } from 'src/models/MatchDTO';
import { ProInfoModel } from 'src/models/ProInfoModel';
import { ServerService } from 'src/servisec/server';
import { TeamsSingleton } from 'src/singleton/TeamsSingleton';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
 @Input() set id(id:number){
  this.model = TeamsSingleton.getTeam(id);
 }
 model?:ProInfoModel;
 constructor(private server:ServerService){
    
 } 
 
}
