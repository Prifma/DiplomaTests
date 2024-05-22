import { Component,Output,EventEmitter } from '@angular/core';
import { ServerService } from 'src/servisec/server';
import { NgForm} from '@angular/forms';
import { MatchModel } from 'src/models/MatchModel';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-option-panel',
  templateUrl: './option-panel.component.html',
  styleUrls: ['./option-panel.component.css']
})
export class OptionPanelComponent {
  constructor(private server:ServerService, private r:Router){}
  matchId:number=0;
  getMatch(form: NgForm){
      this.r.navigate([`statistic/match/${form.value.match}`])
    }
  

  getPlayer(form: NgForm){
    this.r.navigate([`statistic/player/${form.value.player}`])
  }

  getTrends(){
    this.r.navigate([`statistic/hero`])
  }

  
}

