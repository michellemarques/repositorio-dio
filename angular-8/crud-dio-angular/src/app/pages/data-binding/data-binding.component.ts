import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Machado de Assis';
  imgUrl = 'https://picsum.photos/id/1/100/100';
  imgDesc = 'imagem aleatória';
  btnText = 'clique aqui';
  textRed = false;
  bgColor = 'blue';
  textInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  };

  clicou(value: any) {
    console.log('clicado!', value);
  };

  clicou2() {
    this.textRed = true;
  };

}
