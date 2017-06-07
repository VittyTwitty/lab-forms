import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from './user.model';

@Injectable()
export class UsersService {

  private userSubject = new Subject<User[]>();

  private usersList: User[] = [
    new User({first_name: 'John', last_name: 'Doe', email: 'joe@example.com'})
  ];

  constructor() {
    this.userSubject.next(this.usersList);
  }

  public getList(): Observable<User[]> {
    return this.userSubject.asObservable();
  }

  public add(user: User) {
    this.usersList.push(user);
    this.userSubject.next(this.usersList);
  }

}
