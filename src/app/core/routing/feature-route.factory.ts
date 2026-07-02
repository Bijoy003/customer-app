import { Routes } from '@angular/router';
import { ParentComponent } from '../../features/parent/parent.component';
import { TrackByComponent } from '../../track-by/track-by.component';
import { AppConfigService } from '../Services/app-config.service';

export function featureRouteFactory(config: AppConfigService): Routes {

  const routes: Routes = [
    { path: 'parent', component: ParentComponent }
  ];

  if (config.isBetaEnabled()) {
    routes.push({
      path: 'beta',
      component: TrackByComponent
    });
  }

  return routes;
}