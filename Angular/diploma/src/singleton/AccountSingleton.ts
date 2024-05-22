import { AccInfo } from "src/models/AccInfo";

export class AccountSingleton{
    private static instance:AccountSingleton;
    private Acc?:AccInfo;
    private constructor(){}

    public static getAcc(){
        return AccountSingleton.instance.Acc;
    }
    public static setInstance(Acc:AccInfo){
        AccountSingleton.instance = new AccountSingleton();
        AccountSingleton.instance.Acc = Acc;
    }
    
}