import { ShowSentence } from './../home/home.component';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {

  @Input() sentences: ShowSentence[] = []; 

 currentSentence: number = 1;

 

  constructor() {
  
     }


  ngOnInit(): void {
    
  }
  next() {
    this.currentSentence++;
    this.currentSentence > 4 ? (this.currentSentence = 1) : false;
  }
  prev() {
    this.currentSentence--;
    this.currentSentence < 1 ? (this.currentSentence = 4) : false;
  }

} 
