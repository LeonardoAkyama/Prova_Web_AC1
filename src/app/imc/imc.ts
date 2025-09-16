import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  standalone: false,
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class IMC {
  val1: number = 0;
  val2: number = 0;
  cont: number = 0;
  result: number = 0;


  Calculo(): void {
    this.result = this.val1/(this.val2*this.val2)
    if(this.result <= 18.5){
      alert("Abaixo do peso")
    }else if(this.result <= 24.9){
      alert("Peso normal")
    }else if(this.result <= 29.9){
      alert("Sobrepeso")
    }else if(this.result <= 34.9){
      alert("Obesidade grau I")
    }else if(this.result <= 39.9){
      alert("Obesidade grau II")
    }else{
      alert("Obesidade grau III")
    }
  }
}
