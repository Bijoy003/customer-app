import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ParentComponent } from './parent/parent.component';
import { TrackByComponent } from './track-by/track-by.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { SignalsComponent as SignalStateManagementComponent } from './signal-state-management/signals.component';
import { SubjectStateManagementComponent } from './subject-state-management/subject-state-management.component';
import { NgrxStateManagementComponent } from './ngrx-state-management/ngrx-state-management.component';

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
    loadChildren: () => CustomersModule,
  },
  {
    path: 'orders',
    loadChildren: ()=> OrdersModule,
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

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
