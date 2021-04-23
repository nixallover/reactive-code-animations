import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const APP_ROUTES = [
  {
    path: 'examples/carousel',
    loadChildren: () =>
      import('libs/examples/carousel/src/lib/examples-carousel.module').then(
        (m) => m.ExamplesCarouselModule
      ),
  },
  {
    path: 'examples/click-counter',
    loadChildren: () =>
      import(
        'libs/examples/click-counter/src/lib/examples-click-counter.module'
      ).then((m) => m.ExamplesClickCounterModule),
  },
  {
    path: 'examples/series',
    loadChildren: () =>
      import('libs/examples/series/src/lib/examples-series.module').then(
        (m) => m.ExamplesSeriesModule
      ),
  },
  {
    path: '**',
    redirectTo: '/examples/carousel',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
