export class User{
    id : number = 0;
    email : string = "";
    pwd : string = "";    
    confirmPwd : string = "";    
    gender : string = "";    
    terms : boolean = false;   
    
    constructor(values : Object = {})
    {
        //Constructor Initialization
        Object.assign(this, values);
    }

}