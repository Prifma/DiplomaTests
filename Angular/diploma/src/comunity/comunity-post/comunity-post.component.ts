import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { AccInfo } from 'src/models/AccInfo';
import { Comment } from 'src/models/Comunity/Comment';
import { Post } from 'src/models/Comunity/Post';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';


@Component({
    selector: 'comunity-post',
    templateUrl: './comunity-post.component.html',
    styleUrls: ['./comunity-post.component.css']
})
export class ComunityPostComponent {
    
    _post!:Post;
    user?:AccInfo;
    Back(){
        this.r.navigate([`comunity`])
    } 

    body?:string;
    showComments:boolean = false;
    redactionMode:boolean = false;

    submitComment(){
        let c:Comment = new Comment();
        c.body = this.body!;
        c.parentPostId = this._post.id;
        c.userId = this.user!.id!;
        this.postIsLoad =  false;
        
        this.server.submitComment(c).subscribe({next:(data:any)=> 
            this.server.getPost(this._post.id!).subscribe({next:(data:any) => {
            this._post = data;
            this.postIsLoad = true;
        }})});

    }
    Action(){
        this.postBody = this._post.body;
        this.postTitle = this._post.title;
        this.redactionMode = true;
    }
    postBody?:string;
    postTitle?:string;
    postIsLoad:boolean = false;
    change(){
        this._post.body = this.postBody!;
        this._post.title = this.postTitle!;
        this.server.changePost(this._post).subscribe();
        this.exitRedactionMode()
    }
    exitRedactionMode(){
        this.redactionMode = false;
    }
    constructor(private server:ServerService, private route:ActivatedRoute, private r:Router){
        this.user = AccountSingleton.getAcc();
        let id:Guid = route.snapshot.params['guid'];
        server.getPost(id).subscribe({next:(data:any) => {
            this._post = data;
            this.postIsLoad = true;
        }})
    }
}
