import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Injector,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  ngControl: NgControl;

  constructor(private inj: Injector) {}

  ngAfterViewInit(): void {
    this.ngControl = this.inj.get(NgControl);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  private onChange = (newValue: string[]) => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
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

    let newValue: string[] = [];
    const parentControlValue = this.ngControl.control.value;
    if (parentControlValue.includes(this.value)) {
      newValue = [...parentControlValue].filter((item: string) => item !== this.value);
    } else {
      newValue = [...parentControlValue, this.value];
    }

    this.onChange(newValue);
    this.onTouched();
  }
}
