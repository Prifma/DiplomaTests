import { Match } from "./Match";
import { ProInfoModel } from "./ProInfoModel";

export class MatchDTO{
    public page?:number;
    public pageCount?:number;
    public matches?:Match[];
    public teams?:ProInfoModel[];
}