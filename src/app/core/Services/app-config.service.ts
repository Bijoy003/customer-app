import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  isBetaEnabled(): boolean {
    if (typeof window === 'undefined') {
      return false; // running on server
    }

    return localStorage.getItem('beta') === 'true';
  }
}
