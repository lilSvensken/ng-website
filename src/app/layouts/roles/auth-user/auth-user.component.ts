import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUserComponent {}
