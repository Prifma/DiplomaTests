import { Component,Input, ViewEncapsulation } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { AccInfo } from 'src/models/AccInfo';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';

@Component({
    selector: 'comunity-root',
    templateUrl: './comunity-root.component.html',
    styleUrls: ['./comunity-root.component.css'],
})
export class ComunityComponent {
    
    Acc?:AccInfo;
    currentAction:number = 1;
    isFeet(){
        if(this.currentAction == 1)
            return true;
        return false;
    }
    onActionChange(id:number){
        this.currentAction = id;
    }
    back(){
        this.onActionChange(1);
    }
    constructor(){
        this.Acc = AccountSingleton.getAcc();
    }
}
