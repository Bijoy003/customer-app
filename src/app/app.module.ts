import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildDefaultComponent } from './child-default/child-default.component';
import { ChildOnPushComponent } from './child-onpush/child-onpush.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollingModule,
    MatListModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [
    provideClientHydration(),
    provideStore(),
    provideState({name: 'counter', reducer: counterReducer}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
