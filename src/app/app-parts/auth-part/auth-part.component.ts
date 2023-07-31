import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-part',
  templateUrl: './auth-part.component.html',
  styleUrls: ['./auth-part.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPartComponent {
  constructor() {
    console.log('AuthPartComponent work!');
  }
}
