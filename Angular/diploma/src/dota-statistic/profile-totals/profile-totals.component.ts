
import { Component,Input } from '@angular/core';
import { TotalsModel } from 'src/models/TotalsModel';
import { TableBuilderService } from 'src/servisec/tables';

@Component({
  selector: 'app-profile-totals',
  templateUrl: './profile-totals.component.html',
  styleUrls: [`./profile-totals.component.css`]
})
export class ProfileTotalsComponent {
    @Input() set totals(value:TotalsModel[]){
      this._totals = value;
    }
    _totals:TotalsModel[] = [];
    @Input()
    recive:boolean = false;
}