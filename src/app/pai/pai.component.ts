import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {
  texto = 'olá mundo!'
  getNumero(){
    return 40
  }
  nomeClass='paragrafo'
  fonte='wingdings'
  cor='';
  mudaFonte(){
    this.backgroundCor = 'red';
     this.fonte ='arial';
    this.cor='blue';

     
  }

  
  backgroundCor = '';
  mudaBackCor(value:any){
    this.backgroundCor = value
  }
  nome = '';
  mudaNome(value:any){
    this.nome = value
  }
  
  
} 




