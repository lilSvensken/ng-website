import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-main-layout',
  templateUrl: './not-auth-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotAuthLayoutComponent {
  constructor() {
    console.log('NotAuthLayoutComponent work!');
  }
}
