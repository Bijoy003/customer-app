import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './features/parent/parent.component';
import { ChildDefaultComponent } from './features/child-default/child-default.component';
import { ChildOnPushComponent } from './features/child-onpush/child-onpush.component';
import { RouterModule } from '@angular/router';
import { TrackByComponent } from './track-by/track-by.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { SignalsComponent } from './signal-state-management/signals.component';
import { SubjectStateManagementComponent } from './subject-state-management/subject-state-management.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxStateManagementComponent } from './ngrx-state-management/ngrx-state-management.component';
import { counterReducer } from './ngrx-state-management/counter.reducer';
import { RxjsReactiveProgrammingComponent } from './rxjs-reactive-programming/rxjs-reactive-programming.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { retryInterceptor } from '../interceptors/retry.interceptor';
import { TestApiComponent } from './test-api/test-api.component';
import { ParallelApiCallComponent } from './parallel-api-call/parallel-api-call.component';
import { TestDiHeirarchyCounterService } from './core/Services/test-di-heirarchy-counter.service';
import { ChildDiTestComponent } from './features/di-hierarchy-test/child/child.component';
import { ParentDiTestComponent } from './features/di-hierarchy-test/parent/parent.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { FeatureTestComponent } from './features/feature-test/feature-test.component';
import { WebComponentDemoComponent } from './features/web-component-demo/web-component-demo.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './features/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildDefaultComponent,
    ChildOnPushComponent,
    TrackByComponent,
    VirtualScrollComponent,
    WebWorkerComponent,
    SignalsComponent,
    SubjectStateManagementComponent,
    NgrxStateManagementComponent,
    RxjsReactiveProgrammingComponent,
    TestApiComponent,
    ParallelApiCallComponent,
    ChildDiTestComponent,
    ParentDiTestComponent,
    LoginComponent,
    FeatureTestComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollingModule,
    MatListModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Keeps last 25 states
    }),
    WebComponentDemoComponent,
  ],
  providers: [
    provideClientHydration(),
    provideStore(),
    provideState({name: 'counter', reducer: counterReducer}),
    provideHttpClient(
      withInterceptors([retryInterceptor])
    ),
    TestDiHeirarchyCounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
