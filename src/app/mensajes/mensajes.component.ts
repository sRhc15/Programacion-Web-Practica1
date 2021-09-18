import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  menuLista = [
    {id:"1", text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt,'},
    {id:"2", text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt,'},
     
  ];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
