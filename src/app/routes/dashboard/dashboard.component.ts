import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private usersService: UsersService) {
    this.users = usersService.getList();
  }

  ngOnInit() {
  }

}
