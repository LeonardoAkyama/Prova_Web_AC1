import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css'
})
export class Apolice {
  val1: string = "";
  val2: number = 0;
  val3: string = "";
  val4: number = 0;
  result: number = 0;

    Calculo(): void {
      if(this.val3 == "F"){
       this.result = this.val4*0.08
      }else if(this.val2 <= 25){
        this.result = this.val4*0.15
      }else{
        this.result=this.val4*0.10
      }

    }
  }