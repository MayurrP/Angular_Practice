import { Injectable } from "@angular/core";

@Injectable()
export class UserServiceMock{
    constructor(){}

    getUser(): Array<{}>{
        return[
            {
                name: 'user1',
                surname : 'username1'
            }
        ]
    }
}