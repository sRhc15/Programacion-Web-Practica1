import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private usersService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

}
