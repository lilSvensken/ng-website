import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsNotAuthGuard {
  constructor(private _router: Router) {}

  canActivate(): boolean {
    this._router.navigate(['/']);
    return false;
  }

  canActivateChild(): boolean {
    return false;
  }
}
