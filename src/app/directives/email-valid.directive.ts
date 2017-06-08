import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function validateEmailAddress(control: AbstractControl): ValidationErrors | any {

  const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  if (!EMAIL_REGEXP.test(control.value)) {
    return {email: true};
  }
  return null;
}

@Directive({
  selector: '[appEmailValid]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidDirective, multi: true}]
})
export class EmailValidDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | any {
    return validateEmailAddress(control);
  }

}

export function matchField(field) {
  return (control: AbstractControl) => {
    console.log(field.value);
    if (control.value !== field.value) {
      return {match: true};
    }
    return null;
  };
}

@Directive({
  selector: '[appMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchDirective, multi: true}]
})
export class MatchDirective implements Validator {

  @Input() targetInput;

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | any {
    if (this.targetInput) {
      console.log(this.targetInput);
      return matchField(this.targetInput)(control);
    }
    return null;
  }

}
