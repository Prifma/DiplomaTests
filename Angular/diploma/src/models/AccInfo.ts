import { UserType } from "./Comunity/UserType";

export class AccInfo{
    id?:string;
    userType?:UserType;
    isAuth:boolean = false;
    name?:string;
    imgUrl?:string;
}