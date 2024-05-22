
import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatchModel } from 'src/models/MatchModel';
import { RecentMatchModel } from 'src/models/RecentMatchModel';
import { TableBuilderService } from 'src/servisec/tables';

@Component({
  selector: 'app-profile-recent',
  templateUrl: './profile-recent.component.html',
  styleUrls: ['./profile-recent.component.css']
})
export class ProfileRecentComponent {
    @Input() set recent(value:RecentMatchModel[]){
      this._recent = value
    }
    _recent:RecentMatchModel[] =[]
    @Input()
    recive:boolean = false;
    mock:RecentMatchModel = {matchId:"ID Матчу", heroId:"Герой",kills:"Убивства", deaths:"Смерті", assists:"Підмоги"}
    toMatch(id:string){
      this.router.navigate([`statistic/match`,id]);
    }
    constructor(private router:Router){}
}