import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor{
  @Input() type: string = 'text';

  @Input() label!: string;

  @Input() placeholder: string = '';

  @Input() errorMessage?: string = 'Mensage de error';

  @Input() isValid = true;

  @Input() min: any;

  @Input() max: any;

  @Output() keyUp = new EventEmitter<string>();

  @Output() changeValue = new EventEmitter();

  value!: string | null;

  disabled = false;

  onChange = (val: any) => {};

  onTouch = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  onKeyUp() {
    this.keyUp.emit(this.value as string);
  }

  onChangeValue() {
    this.onChange(this.value);
  }
}
