import { ShowSentence } from './../home/home.component';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit {

  @Input() sentences: ShowSentence[] = []; 
 

  constructor() { }

  ngOnInit(): void {
    
  }

} 
