import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://sheet.best/api/sheets/8845a512-2847-485c-8be9-c3cc37fa2503';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    })
  }

  constructor(private httpCliente: HttpClient) { }

  // C.R.U.D = CREATE, READ, UPDATE, DELETE
  // retorna a lista de usuarios (READ)
getUsers():Observable<User[]> {
  return this.httpCliente.get<User[]>(this.apiUrl);
};

// salva usuário no banco (CREATE)
postUser(user: User): Observable<User> {
  return this.httpCliente.post<User>(this.apiUrl, user, this.httpOptions);
};

// excluí o usuário (DELETE)
deleteUser(id: number): Observable<User> {
  return this.httpCliente.delete<User>(`${this.apiUrl}/id/${id}`);
}

// edita usuario UPDATE
updateUser(id: string, user: User): Observable<User> {
  return this.httpCliente.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
}

// lista usuário único
  getUser(id: string): Observable<User[]> {
    return this.httpCliente.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
