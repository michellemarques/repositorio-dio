import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  number = 0;
  text = 'hello world';
  date = new Date;
  pessoa= {
    nome: 'Ana',
    idade: 25,
    profissao: 'Professora'
  };

  nomes = ['Ana', 'Ivo', 'Maria']; 

  constructor( private uppercase: UpperCasePipe) {
    //this.text = this.uppercase.transform(this.text);
   }

  ngOnInit(): void {
  }

  mudaValor() {
    this.number = 123456789;
  }

  add(texto: string): void {
    this.nomes.push(texto);
  }

}
