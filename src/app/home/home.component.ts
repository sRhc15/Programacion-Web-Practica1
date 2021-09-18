import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuLista = [
    {id:"1", text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt,'},
    {id:"2", text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt,'},
     
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
