
import { Component,Input, ViewEncapsulation } from '@angular/core';
import { HeroModel } from 'src/models/HeroModel';
import { TableBuilderService } from 'src/servisec/tables';

@Component({
  selector: 'app-dota-side',
  templateUrl: './dota-side.component.html',
  styleUrls:['./dota-side.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DotaSideComponent {

    @Input() set heroes(value:HeroModel[]){
      this._heroes = value;
      if(this._heroes.length>1){
        this.setRightTable(this.mq.matches)
      }
      
    }
    _heroes: HeroModel[] = [];
    htmlTable:string = "";
    mq:MediaQueryList;
    
    constructor(private table:TableBuilderService){
      this.mq = window.matchMedia( "(max-width: 480px)" );
      this.mq.addEventListener("change",(e)=>this.lisenet(e));
    }

    setRightTable(mq:boolean){
      if(mq){
        this.htmlTable = this.table.matchSideShortTable(this._heroes)
      }
      else{
        this.htmlTable = this.table.matchSideTable(this._heroes)
      }
    }
    lisenet(m:MediaQueryListEvent){
      this.setRightTable(m.matches);
    }

}