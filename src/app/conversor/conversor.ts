import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  standalone: false,
  templateUrl: './conversor.html',
  styleUrl: './conversor.css'
})
export class Conversor {

  val1: number = 0;
  result1: number = 0;
  result2: number = 0;

    Calculo(): void {
    this.result1 = ((this.val1*1.8)+32) ;
    this.result2 = (this.val1+273.15)
  }

}
