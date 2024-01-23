import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
name: any;
Onchange(arg0: any) {
throw new Error('Method not implemented.');
}
 display = true;
  constructor(){
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
