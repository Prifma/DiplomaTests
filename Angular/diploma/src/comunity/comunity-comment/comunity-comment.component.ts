import { Component,Input } from '@angular/core';
import { Guid } from 'guid-typescript';
import { AccInfo } from 'src/models/AccInfo';
import { Comment } from 'src/models/Comunity/Comment';
import { Post } from 'src/models/Comunity/Post';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';

@Component({
    selector: 'comunity-comment',
    templateUrl: './comunity-comment.component.html',
    styleUrls: ['./comunity-comment.component.css']
})
export class ComunityCommentComponent {
    @Input() set comm(c:Comment){
        this._comm = c;
    }
    redactionMode:boolean = false;
    _comm?:Comment;
    user?:AccInfo;
    constructor(private server:ServerService){
        this.user = AccountSingleton.getAcc();
    }

    Redaction(){
        this.redactionMode = true;
        this.body = this._comm?.body;
    }

    ExitRedaction(){
        this.redactionMode = false;
    }
    body?:string;
    Change(){
        if(this.body != this._comm!.body)
        {
            this._comm!.body = this.body!;
            this.server.changeComment(this._comm!).subscribe({next:(data:any)=> 2+2});
        }
        this.ExitRedaction();
    }
}
