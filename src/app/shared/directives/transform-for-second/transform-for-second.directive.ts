import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTransformForSecond]',
})
export class TransformForSecondDirective implements OnInit {
  @Input() second: number;

  constructor(private readonly _elem: ElementRef) {}

  ngOnInit(): void {
    this._elem.nativeElement.style.transform = `rotate(${this.second * 6}deg)`;
  }
}
