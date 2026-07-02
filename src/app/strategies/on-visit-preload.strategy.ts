import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, Router, NavigationEnd } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OnVisitPreloadStrategy implements PreloadingStrategy {

  private preloaded = new Set<string>();
  private routeLoaders = new Map<string, () => Observable<any>>();  // store Angular's load fn

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const currentPath = event.urlAfterRedirects.split('/')[1];

        this.router.config.forEach(route => {
          const preloadBundle = route.data?.['preloadBundle'];

          // Visiting customer path triggers a lookup for 'orders'
          if (currentPath === route.path && preloadBundle) {
            if (this.preloaded.has(preloadBundle)) return;

            // Use the stored Angular load function
            const loader = this.routeLoaders.get(preloadBundle);
            if (loader) {
              this.preloaded.add(preloadBundle);
              loader().subscribe({
                next: () => console.log(`Preloaded: ${preloadBundle}`),
                error: (err) => console.error(`Preload failed`, err)
              });
            }
          }
        });
      });
  }

  // Angular calls this for every lazy route — store the load fn here
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.path) {
      this.routeLoaders.set(route.path, load);  // capture Angular's actual loader
    }
    return EMPTY;
  }
}