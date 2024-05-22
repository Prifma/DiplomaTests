import { Component,EventEmitter,Input,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';
import { SortingType } from 'src/models/Comunity/SortingType';


@Component({
    selector: 'comunity-option',
    templateUrl: './comunity-option.component.html',
    styleUrls: ['./comunity-option.component.css']
})
export class ComunityOptionComponent {
    constructor(private route:Router){

    }
    sortTypes = Object.values(SortingType);
    @Input()
    Acc?:AccInfo;
    @Input()
    isFeet:boolean = false
    actionChange(){
        this.route.navigate([`comunity/desk`])
    }
    searchPosts(form:NgForm){
        if(form.valid){
            this.route.navigate([`comunity/feed`], {
                queryParams:{
                    sort:this.selectedSort,
                    search:this.searchString
                }})
            form.reset()
        }
    }
    selectedSort?:SortingType;
    searchString?:string
    
}
