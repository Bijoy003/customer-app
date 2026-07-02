import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Route,
  RouterModule,
  ROUTES,
  Routes,
} from '@angular/router';
import { CustomersModule } from './features/customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ParentComponent } from './features/parent/parent.component';
import { TrackByComponent } from './track-by/track-by.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { SignalsComponent as SignalStateManagementComponent } from './signal-state-management/signals.component';
import { SubjectStateManagementComponent } from './subject-state-management/subject-state-management.component';
import { NgrxStateManagementComponent } from './ngrx-state-management/ngrx-state-management.component';
import { RxjsReactiveProgrammingComponent } from './rxjs-reactive-programming/rxjs-reactive-programming.component';
import { TestApiComponent } from './test-api/test-api.component';
import { ParallelApiCallComponent } from './parallel-api-call/parallel-api-call.component';
import { ParentDiTestComponent } from './features/di-hierarchy-test/parent/parent.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { OnVisitPreloadStrategy } from './strategies/on-visit-preload.strategy';
import { featureRouteFactory } from './core/routing/feature-route.factory';
import { AppConfigService } from './core/Services/app-config.service';
import { FeatureTestComponent } from './features/feature-test/feature-test.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentDemoComponent } from './features/web-component-demo/web-component-demo.component';

// // const routes: Routes = [
// //   {
// //     path: 'customers',
// //     loadChildren: () =>
// //       import('./customers/customers.module').then((m) => m.CustomersModule),
// //   },
// //   {
// //     path: 'orders',
// //     loadChildren: () =>
// //       import('./orders/orders.module').then((m) => m.OrdersModule),
// //   },
// //   {
// //     path: 'parent',
// //     component: ParentComponent,
// //   }
// // ];

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () =>
      import('./features/customers/customers.module').then(
        (m) => m.CustomersModule,
      ),
    data: { preloadBundle: 'orders' }, // tag which module to preload on visit
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
    data: { preload: true }, // Preloading
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'trackby',
    component: TrackByComponent,
  },
  {
    path: 'virtualscroll',
    component: VirtualScrollComponent,
  },
  {
    path: 'webworker',
    component: WebWorkerComponent,
  },
  {
    path: 'signalstate',
    component: SignalStateManagementComponent,
  },
  {
    path: 'subjectstate',
    component: SubjectStateManagementComponent,
  },
  {
    path: 'ngrxstate',
    component: NgrxStateManagementComponent,
  },
  {
    path: 'rxjs',
    component: RxjsReactiveProgrammingComponent,
  },
  {
    path: 'testapi',
    component: TestApiComponent,
  },
  {
    path: 'parallelapicall',
    component: ParallelApiCallComponent,
  },
  {
    path: 'parentditest',
    component: ParentDiTestComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
    canActivate: [authGuard],
    data: { preload: true },
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'feature-test',
    component: FeatureTestComponent,
  },
  {
    path: 'remote-dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Module',
      }).then((m) => m.DashboardModule),
    canActivate: [authGuard],
    data: { preload: true },
  },
  {
    path: 'web-component',
    component: WebComponentDemoComponent,
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: OnVisitPreloadStrategy,
    }),
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: featureRouteFactory,
      deps: [AppConfigService],
      multi: true,
    },
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
