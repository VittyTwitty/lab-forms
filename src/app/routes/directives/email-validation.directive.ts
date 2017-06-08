import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

export function emailValidation(control: AbstractControl): { [key: string]: any } {
  const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

  if (control.value && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
    return {'email': true};
  }
  return null;
}

@Directive({
  selector: '[appEmailValidation]',
  exportAs: 'myCustomDirective',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true}]
})
export class EmailValidationDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return emailValidation(control);
  }

}
