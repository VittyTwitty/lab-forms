import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {

  public addModel: any = {};

  constructor(private userService: UsersService, private router: Router) {
  }

  ngOnInit() {
  }

  submit($event, form) {
    console.log('form', form);
    if (form.invalid) {
      alert('Invalid forms');
      return;
    }
    this.userService.add(new User(this.addModel));
    this.router.navigate(['/routes/dashboard']);
  }

}
