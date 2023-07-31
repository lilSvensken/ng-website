import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-auth-part',
  templateUrl: './not-auth-part.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotAuthPartComponent {
  constructor() {
    console.log('NotAuthPartComponent work!');
  }
}
