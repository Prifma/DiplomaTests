import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';
import { Post } from 'src/models/Comunity/Post';
import { UserType } from 'src/models/Comunity/UserType';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';


@Component({
    selector: 'comunity-desk',
    templateUrl: './comunity-desk.component.html',
    styleUrls: ['./comunity-desk.component.css']
})
export class ComunityDeskComponent {
    
    Acc?:AccInfo;
    onSubmit(form:NgForm){
        if(this.Acc?.userType == UserType.Banned){
            return;
        }
        let post:Post = new Post();
        post.body = form.controls["body"].value;
        post.title = form.controls["title"].value;
        post.userId = this.Acc?.id! ;
        this.server.submitPost(post).subscribe();
        this.Back()
    }
    Back(){
        this.route.navigate([`comunity`])
    }
    constructor(private server:ServerService,private route:Router){
        this.Acc = AccountSingleton.getAcc();
    }
}
