import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  statistic:string = "#1C242D";
  statisticText:string = "white"
  statisticBlock:string = "#242F39";
  statisticBlock2:string = "#2E3740";
  statisticBlock3:string = "#000000";
  comunity:string = "#cbeaf2";
  comunityText:string = "#333"
  comunityBlock:string = "#FFBF69";
  comunityBlock2:string = "#2EC4B6";
  comunityBlock3:string = "white";
  constructor(private router:Router){
    
  }
  @Input()
  acc?:AccInfo
  onItemChange(value:any){
    switch(value){
      case 1 :
        this.OnComunity()
        this.router.navigate(['comunity']);
        
        break;
        case 2 :
          this.OnStatistic()
          this.router.navigate(['statistic']);
          
        break;
        case 0:
          this.OnStatistic()
          this.router.navigate([`main`]);
          break;
        case 3:
          this.OnStatistic()
          this.router.navigate([`leagues`]);
          
          break;
    }
  }

  OnComunity(){
    document.documentElement.style.setProperty(`--background`,this.comunity);
    document.documentElement.style.setProperty(`--text-color`,this.comunityText);
    document.documentElement.style.setProperty(`--block`,this.comunityBlock);
    document.documentElement.style.setProperty(`--block2`,this.comunityBlock2);
    document.documentElement.style.setProperty(`--block3`,this.comunityBlock3);
  }

  OnStatistic(){
    document.documentElement.style.setProperty(`--background`,this.statistic);
    document.documentElement.style.setProperty(`--text-color`,this.statisticText);
    document.documentElement.style.setProperty(`--block`,this.statisticBlock);
    document.documentElement.style.setProperty(`--block2`,this.statisticBlock2);
    document.documentElement.style.setProperty(`--block3`,this.statisticBlock3);
  }
}
