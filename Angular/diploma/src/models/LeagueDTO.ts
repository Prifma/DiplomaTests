import { League } from "./League";

export class LeagueDTO{
    public page?:number;
    public pageCount?:number;
    public searchString?:string;
    public leagues?:League[];
}