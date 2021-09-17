import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  user: User;
  usersSize: Number;

  constructor(private usersService: UsersService) { 
  }

  ngOnInit(): void {
    this.user = new User();
    this.usersSize = this.usersService.getUsers().length;
  }

}
