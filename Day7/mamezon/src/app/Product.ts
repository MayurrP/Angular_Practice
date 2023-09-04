export class Product{
    title! : string;
    price! : string;
    image! : string;


constructor(values : Object = {})
    {
        //Constructor Initialization
        Object.assign(this, values);
    }
}