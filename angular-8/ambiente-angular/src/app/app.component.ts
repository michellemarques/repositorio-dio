import { Component, OnInit } from '@angular/core';
import { PeopleService} from './shared/services/people.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;

  nome = 'Ana Maria da Silva Costa';

  text = '';

  pessoas = [
    {
      firstName: 'Ivonaldo',
      lastName: 'Soares',
      age: 0
    }
  ];

  constructor(private PeopleService: PeopleService) {

  }

  ngOnInit(): void {
      console.log(this.pessoas);
      this.getPeople();


      let interval = setInterval(() => {
        this.count++
        if(this.count === 10) clearInterval(interval);
      }, 1000);
  };

  clicou(nome: string): void {
    console.log("Clicou no botão", nome);
  }

  getPeople() {
    this.PeopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  };
}
