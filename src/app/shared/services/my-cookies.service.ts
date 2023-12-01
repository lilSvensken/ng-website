import { Injectable } from '@angular/core';
import { CookieService } from '@gorniv/ngx-universal';

const PREFIX = 'SVEN';

@Injectable({ providedIn: 'root' })
export class MyCookiesService {
  constructor(private cookies: CookieService) {}

  get(name: string): any {
    const value = this.cookies.get(`${PREFIX}_${name}`);
    return (value && JSON.parse(value)) || null;
  }

  put(name: string, val: any): void {
    this.cookies.put(`${PREFIX}_${name}`, JSON.stringify(val));
  }

  remove(name: string): void {
    this.cookies.remove(`${PREFIX}_${name}`);
  }
}
