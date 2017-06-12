import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { matchField } from '../../directives/email-valid.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('asdasd', [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    password_confirm: new FormControl(null, []),
    address: new FormGroup({
      street: new FormControl(null),
    }),
    invite: new FormArray([])
  });

  streetRequired = false;
  showCity = false;
  inviteArray: FormArray;

  constructor() {
  }

  ngOnInit() {
    const passwordConfirm = this.form.get('password_confirm');
    passwordConfirm.setValidators([matchField(this.form.get('password'))]);
    passwordConfirm.updateValueAndValidity();
    this.inviteArray = this.form.get('invite') as FormArray;
    this.addNewInvite();
    const street = this.form.get('address').get('street');
    this.form.get('password').valueChanges.subscribe((value) => {
      if (value && value.length > 1 && this.streetRequired !== true) {
        street.setValidators([Validators.required]);
        street.updateValueAndValidity();
        this.streetRequired = true;
      } else if (value && value.length <= 1) {
        street.setValidators([]);
        street.updateValueAndValidity();
        this.streetRequired = false;
      }
    });
    this.form.get('address').valueChanges.subscribe((value) => {
      console.log((this.form.get('address') as FormGroup).controls);
    });
  }

  addNewInvite() {
    this.inviteArray.push(new FormGroup({
      name: new FormControl(null, [Validators.required])
    }));
  }

  submit($event) {
    $event.preventDefault();
    console.log(this.form);
  }

  toggleCity() {
    const address: FormGroup = this.form.get('address') as FormGroup;
    if (this.showCity === false) {
      address.setControl('city', new FormControl(null, [Validators.required]));
      this.showCity = true;
    } else {
      address.removeControl('city');
      this.showCity = false;
      // address.addControl()
    }
  }

  setValue() {
    this.form.patchValue({
      email: null,
      address: {
        street: 'some street'
      }
    });
  }

}
