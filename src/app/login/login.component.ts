import { Component, OnInit } from '@angular/core';
import { User } from "./../data/user";
import { UsersService } from "./../users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  

  constructor(private usersService:UsersService, private router:Router) {  
  }

  ngOnInit(): void {
    this.user = new User();
    
  }

  searchUser(){
    let createdNewUser:boolean = this.usersService.searchUser(this.user.name, this.user.pass);

    if(createdNewUser){
      this.router.navigate(["/inicio",this.user.name]);
    } else{
      alert("Usuario o contraseña incorrectos!")
    }
  }
  

}
