
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-statistic-result',
  templateUrl: './result.component.html',
})
export class ResultComponent {
    @Input()
    action?:number=0;
    @Input()
    id:number= 0;
}