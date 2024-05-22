import { ProInfoModel } from "src/models/ProInfoModel";

export class TeamsSingleton{
    private static instance:TeamsSingleton;
    private teams?:ProInfoModel[];
    private constructor(){}
    
    public static setInstance(teams:ProInfoModel[]){
        TeamsSingleton.instance = new TeamsSingleton();
        TeamsSingleton.instance.teams = teams;
    }
    public static getTeam(id:number){
        let team = TeamsSingleton.instance.teams?.find(p=> p.teamId ===id);
        return team;
    }
    public static getAllTeams(): ProInfoModel[] | undefined {
        return TeamsSingleton.instance.teams;
      }
}