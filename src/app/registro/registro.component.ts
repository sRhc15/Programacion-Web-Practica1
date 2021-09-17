import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: User;
  usersSize: Number;

  constructor(private usersService: UsersService) { 
  }

  ngOnInit(): void {
    this.user = new User();
    this.usersSize = this.usersService.getUsers().length;
  }

  saveNewUser(){
    let createdNewUser:boolean = this.usersService.setNewUser(this.user);

    if(createdNewUser){
      this.user = new User();
      this.usersSize = this.usersService.getUsers().length;
      alert("Usuario agregado exitosamente!");
    } else{
      alert("El Usuario ya existe.")
    }
  }

}
