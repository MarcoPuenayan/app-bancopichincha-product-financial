import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  templateUrl: './button-generic.component.html',
  styleUrls: ['./button-generic.component.scss']
})
export class ButtonGenericComponent {
  @Input() buttonBgColor: ButtonBgColor = 'yellow';
  @Input() buttonText = '';
  @Input() disabled = false;
  @Input() buttonType: ButtonType = 'button';
}
type ButtonBgColor = 'yellow' | 'gray';
type ButtonType = 'submit' | 'button' | 'reset';