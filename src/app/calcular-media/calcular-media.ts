import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css'
})
export class CalcularMedia {
  val1: number = 0;
  val2: number = 0;
  val3: number = 0;
  val4: number = 0;
  result: number = 0;

  Calculo(): void {
    this.result = (this.val1*0.15)+(this.val2*0.30)+(this.val3*0.10)+(this.val4*0.45);
    if(this.result >= 5){
      alert("Parabens, passou!")
    }else{
      alert("Reprovou")
    }

  }


}
