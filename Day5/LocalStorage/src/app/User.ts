export class User{
    username : string = "";
    password : string = "";

    constructor(values : Object = {})
    {
        //Constructor Initialization
        Object.assign(this, values);
    }
}