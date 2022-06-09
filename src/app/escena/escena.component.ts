import { ShowSentence } from './../home/home.component';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {

  @Input() sentences: ShowSentence[] = []; 

 currentSentence: number = 0;
 

  constructor() {
    
   }


  ngOnInit(): void {
    
  }
  next() {
    this.currentSentence++;
    this.currentSentence > 3 ? (this.currentSentence = 0) : false;
  }
  prev() {
    this.currentSentence--;
    this.currentSentence < 0 ? (this.currentSentence = 3) : false;
  }

} 
