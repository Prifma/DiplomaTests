
import { Component,Input } from '@angular/core';
import { MatchModel } from 'src/models/MatchModel';

@Component({
  selector: 'app-statistic-root',
  templateUrl: './statistic-root.component.html',
  styleUrls: ['./statistic-root.component.css']
})
export class StatisticRootComponent {
  action?:number;
  id?:any;
  onChanged(e:any){
    this.action = e.a;
    this.id = e.m;
  }
}