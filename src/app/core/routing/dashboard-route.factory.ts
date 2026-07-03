import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../../features/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from '../../features/user-dashboard/user-dashboard.component';
import { AuthService } from '../Services/auth.service';

// Dynamically registers the role-based dashboard routes at app startup.
// The routes returned depend on the current role, so an admin gets the
// admin dashboard route while everyone else gets the user dashboard route.
// Provided via the ROUTES multi-provider using useFactory (see AppRoutingModule).
export function dashboardRouteFactory(auth: AuthService): Routes {
  const routes: Routes = [];

  if (auth.getRole() === 'admin') {
    routes.push({ path: 'admindashboard', component: AdminDashboardComponent });
  } else {
    routes.push({ path: 'userdashboard', component: UserDashboardComponent });
  }

  return routes;
}
