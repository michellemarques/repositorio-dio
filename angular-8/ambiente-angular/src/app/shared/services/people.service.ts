import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Ivonaldo',
        lastName: 'Soares',
        age: 26
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 28
      },
      {
        firstName: 'João',
        lastName: 'Pereira',
        age: 32
      },
      {
        firstName: 'Márcio',
        lastName: 'Santos',
        age: 40
      }
    ];

    return of(peopleArray);
  }
}
