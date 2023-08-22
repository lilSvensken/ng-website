import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskbarComponent {
  constructor() {
    console.log('taskbar work!');
  }
}
