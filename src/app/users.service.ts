import { Injectable } from '@angular/core';
import { User } from "./data/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:User[];

  constructor() { 
    this.users = [];
  }

  getUsers(){
    return this.users;
  }

  setNewUser(newUser:User): boolean{
    let usersResult = this.users.filter(x =>x.name == newUser.name);
    let userExist = usersResult.length == 0;

    if(userExist){
      this.users.push(newUser);
    }

    return userExist;
  }

  searchUser(userName: String, userPass: String): boolean{
    let usersResult = this.users.filter(x=> x.name == userName);
    let usersResult2 = this.users.filter (x=> x.pass == userPass);
    let userExist = usersResult.length == 1 && usersResult2.length == 1;

    return userExist;
  }

  findUser(userName: String):User{
    let user = this.users.find(x => x.name == userName);
    return user;
  }

}
