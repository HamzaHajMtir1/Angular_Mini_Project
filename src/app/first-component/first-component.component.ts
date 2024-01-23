import { Component } from '@angular/core';
@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
Onchange(arg0: any) {
throw new Error('Method not implemented.');
}
    name = "Hamza Haj Mtir";
    age = "21";
    imageURL = "https://image.elite-auto.fr//visuel/AUDI/audi_22rs7sprtbk4wdhb2b_angularfront.png";
    
    job = "";
    
    change(){
      this.name="Bouhmez";
      this.age="50";
    }

    OnChange(value: string){
      this.job =value;
    }
    constructor(){
      
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
    }
}
