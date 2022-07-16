import { Component, OnInit } from '@angular/core';
import { PeopleService} from '../../services/people.service'


@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  constructor(private PeopleService: PeopleService) { }

  pessoas = [
    {
      firstName: 'Ivonaldo',
      lastName: 'Soares',
      age: 0
    }
  ];

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.PeopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  };

}
