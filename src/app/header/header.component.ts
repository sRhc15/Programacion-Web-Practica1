import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  usersSize: Number;

  constructor(private usersService: UsersService, private router: Router,
              private activatedRoute: ActivatedRoute ) {
   }

  ngOnInit(): void {
    this.user = new User();
    this.user.name = this.activatedRoute.snapshot.params["name"];
    this.user = this.usersService.findUser(this.user.name);
  }

}
