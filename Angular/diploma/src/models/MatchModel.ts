import { HeroModel } from "./HeroModel";
import { TeamModel } from "./TeamModel";

export class MatchModel{
    matchId?:string;
    heroes:HeroModel[] = [];
    radiantWin?:string;
    dire:TeamModel  = {score:""};;
    radiant:TeamModel = {score:""};
    duration?:string;
    leagueId?:string;
}