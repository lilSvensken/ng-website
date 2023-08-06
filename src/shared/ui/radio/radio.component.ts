import { AfterViewInit, Component, forwardRef, Injector, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RadioComponent),
    },
  ],
})
export class RadioComponent implements ControlValueAccessor, AfterViewInit {
  @Input() value = '';
  @Input() caption = '';
  @Input() name = '';

  valueControl = '';
  disabled = false;

  ngControl: NgControl;

  constructor(private inj: Injector) {}

  ngAfterViewInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  private onChange = (newValue: string) => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(outsideValue: string): void {
    this.valueControl = outsideValue;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(insideValue: string): void {
    this.valueControl = insideValue;

    const parentControlValue: string = this.ngControl.control.value;
    if (parentControlValue !== this.value && insideValue) {
      this.onChange(this.value);
      this.onTouched();
    }
  }
}
