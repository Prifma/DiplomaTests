import { Component,Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { AccInfo } from 'src/models/AccInfo';
import { Post } from 'src/models/Comunity/Post';
import { Posts } from 'src/models/Comunity/Posts';
import { SortingType } from 'src/models/Comunity/SortingType';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';

@Component({
    selector: 'comunity-feed',
    templateUrl: './comunity-feed.component.html',
    styleUrls: ['./comunity-feed.component.css']
})
export class ComunityFeedComponent {
    posts?:Posts;
    paggination?:number[];
    isFeed:boolean = true;
    sub:Subscription;
    constructor(private server:ServerService,private route: ActivatedRoute,private router:Router){
        this.ChoosePost();
        
        this.sub = router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                
                if(!this.searchHasHappendAndNotComingYet)
                    this.ChoosePost()
            }
            
        })
    }
    ngOnDestroy(){
        this.sub.unsubscribe()
    }

    ChoosePost(offset:number = 0){
        this.searchHasHappendAndNotComingYet = true;
        let sort:SortingType = this.route.snapshot.queryParams['sort'];
        let search:string = this.route.snapshot.queryParams['search'];
        if(!sort) sort = SortingType.Common;
        if(!search)search = "";

        this.loadPosts(offset,sort,search)
    }
    searchHasHappendAndNotComingYet:boolean = false;
    currentPost!:Post;
    pageSort:SortingType = SortingType.Common;
    pageSearch:string = ""; 
    goToPost(post:Post){
        this.router.navigate(
            [`comunity/post`,post.id]
        )
    }
    goToFeed(){
        this.loadPosts(0,SortingType.Common,"")
    }
    answerIsCome:boolean = false;
    loadPosts(offset:number,sort:SortingType = this.pageSort,search:string = this.pageSearch){
        this.answerIsCome = false
        this.server.getPosts(offset,sort,search).subscribe({next:(data:any) => {
            this.posts = data;
            this.pageSort = data.pageSort;
            this.pageSearch = data.pageSearch;
            this.buildPages();
            this.searchHasHappendAndNotComingYet = false;
            this.answerIsCome = true
            }});
    }
    buildPages(){
        this.paggination = [];
        for(let i:number = 0; i<this.posts?.pagesCount!; i++){
            this.paggination.push(i);
        }
    }
}
