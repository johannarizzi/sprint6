import { Component, OnInit } from '@angular/core';

export interface ShowSentence {  
  id: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  public starter:boolean;

  homeSentences = [
    {
      "id": 1,
      "text": "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
    },
    {
      "id": 2,
      "text": "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas",
    },
    {
      "id": 3,
      "text": "El héroe decidió atravesar la puerta que le llevaba a casa",
    },
    {
      "id": 4,
      "text": "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...",
    }
  ];

  constructor() {
    this.starter = false;
   }

  ngOnInit(): void {}
    
    showEscena() {

      this.starter = true;

    }
     
  

}

