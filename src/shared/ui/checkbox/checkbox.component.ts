import { AfterViewInit, Component, forwardRef, Injector, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor, AfterViewInit {
  @Input() value = '';
  @Input() caption = '';
  @Input() name = '';

  valueControl = false;
  disabled = false;

  ngControl: any;
  parentControl: FormControl | AbstractControl | any;

  constructor(private inj: Injector) {}

  ngAfterViewInit(): void {
    this.ngControl = this.inj.get(NgControl);
    setTimeout(() => {
      this.parentControl = this.ngControl.control;
    });
  }

  private onChange = (newValue: (string | undefined)[]) => {
    console.log('onChange:', newValue);
  };

  private onTouched = () => {
    console.log('onTouched');
  };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string[]): void {
    this.valueControl = outsideValue.includes(this.value);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(insideValue: boolean): void {
    this.valueControl = insideValue;

    let newValue = this.parentControl.value;
    if (newValue.includes(this.value)) {
      newValue = newValue.filter((item: string) => item !== this.value);
    } else {
      newValue = [...newValue, this.value];
    }

    this.onChange(newValue);
    this.onTouched();
  }
}
