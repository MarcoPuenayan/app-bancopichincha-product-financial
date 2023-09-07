import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Errors, formErrors } from './Erros';

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class InputErrorComponent {
  errorMessage = '';
  @Input() set error(error: ValidationErrors | null | undefined) {
    if (error) {
      const errorString = <keyof Errors>(
        (<string>Object.keys(error as Object)[0])
      );
      this.errorMessage = formErrors[errorString];
    } else {
      this.errorMessage = '';
    }
  }
}
