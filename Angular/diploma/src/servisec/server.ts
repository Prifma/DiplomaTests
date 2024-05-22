import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Guid } from "guid-typescript";
import { Comment } from "src/models/Comunity/Comment";
import { Post } from "src/models/Comunity/Post";
import { Reaction } from "src/models/Comunity/Reaction";
import { SortingType } from "src/models/Comunity/SortingType";

@Injectable()
export class ServerService{
    constructor(private http:HttpClient){}

    private matchUrl:string = "/api/match?id="
    private playerUrl:string = "/api/account?id="
    private recentUrl:string = "/api/rMatches?id="
    private totals:string = "/api/totals?id="
    private valve:string = "/api/user?id="
    private trends:string = "/api/trends?id="
    private heroes:string = "/api/heroes"
    private leagues:string = "/api/leagues"
    private matches:string = "/api/matches"
    private team:string = "/api/team"

    private comunity:string = "/db/getPosts?offset="
    private gPost:string = "/db/getPost?id="
    private post:string = "/db/submitPost"
    private reaction:string = "/db/addReaction"
    private checkReaction:string = "/db/checkReaction"
    private comment:string = "/db/submitComment"

    private ban:string = "/db/banUser"
    private delete:string = "/db/deleteEntity"
    private changeC:string = "/db/changeComment"
    private changeP:string = "/db/changePost"


public getTeam(id:number){
    return this.http.get(this.team + "?id=" +id);
}
    public getMatch(id:number){
        this.log(this.getMatch);
        return this.http.get(this.matchUrl + id);
    }
    public getPlayer(id:number){
        this.log(this.getPlayer);
        return this.http.get(this.playerUrl + id);
    }
    public getRecentMatches(id:number){
        this.log(this.getRecentMatches);
        return this.http.get(this.recentUrl + id);
    }
    public getTotals(id:number){
        this.log(this.getTotals);
        return this.http.get(this.totals + id);
    }
    public loadUser(){
        this.log(this.loadUser);
        return this.http.get("/auth/loaduser")
    }
    public getUser(id:string){
        this.log(this.getUser);
        return this.http.get(this.valve + id);
    }
    
    public getPosts(offset:number,sort:SortingType,search:string){
        this.log(this.getPosts);
        return this.http.get(this.comunity+offset + "&s=" + SortingType[sort]+"&search=" + search);
    }

    public getPost(id:Guid){
        this.log(this.getPost);
        return this.http.get(this.gPost+id);
    }

    public submitPost(post:Post){
        this.log(this.submitPost);
        const body = post;
        return this.http.post(this.post,body);
    }

    public submitReaction(reaction:Reaction){
        this.log(this.submitReaction);
        const body = reaction;
        return this.http.post(this.reaction,body);
    }

    public checkReactionIsExist(id:string,entityId:Guid){
        return this.http.get(this.checkReaction + `?i=${id}&e=${entityId}`);
    }

    public submitComment(comment:Comment){
        const body = comment;
        return this.http.post(this.comment,body);
    }

    public deleteEntity(id:Guid){
        const body = {id:id}
        return this.http.post(this.delete,body);

    }
    public banUser(id:string){
        const body = {id:id}
        return this.http.post(this.ban,body);
    }

    public changeComment(comment:Comment){
        const body = comment;
        return this.http.post(this.changeC,body);
    }
    public changePost(post:Post){
        const body = post;
        return this.http.post(this.changeP,body)
    }

    public getTrends(id:any){
        this.log(this.getTrends)
        return this.http.get(this.trends + id)
    }

    public getHeroes(){
        this.log(this.getHeroes)
        return this.http.get(this.heroes);
    }

    public getLeagues(page:number, search:string){
        this.log(this.getLeagues)
        return this.http.get(this.leagues + "?page=" + page + "&search=" + search);
    }

    public getMatches(id:number,page:number){
        return this.http.get(this.matches + "?id=" + id + "&page=" + page)
    }

    private log(f:Function){
    }


}