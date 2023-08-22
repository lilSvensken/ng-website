import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SvgLogoComponent } from 'app/assets/icons/logo/svg-logo.component';
import { ThemesToggleModule } from 'app/widgets/themes-toggle/themes-toggle.module';
import { ClockModule } from 'app/widgets/clock/clock.module';
import { AuthUserComponent } from './auth-user.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskbarComponent } from './components/taskbar/taskbar.component';
import { BackgroundComponent } from './components/background/background.component';
import { AuthUserRoutingModule } from './auth-user.routing.module';

@NgModule({
  declarations: [
    AuthUserComponent,
    HeaderComponent,
    TaskbarComponent,
    BackgroundComponent,
    SvgLogoComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    AuthUserRoutingModule,
    ReactiveFormsModule,
    ThemesToggleModule,
    ClockModule,
  ],
})
export class AuthUserModule {}
