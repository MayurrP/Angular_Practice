export class StudentDetails{
    id : number = 0;
    name : string = "";
    phoneNo : number = 0;    
    gender : string = "";    
    terms : boolean = false;   
    
        constructor(values : Object = {})
        {
            //Constructor Initialization
            Object.assign(this, values);
        }
}