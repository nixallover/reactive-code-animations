import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const APP_ROUTES = [
  {
    path: 'examples/nx-cloud-illustration',
    loadChildren: () =>
      import(
        'libs/examples/nx-cloud-illustration/src/lib/examples-nx-cloud-illustration.module'
      ).then((m) => m.ExamplesNxCloudIllustrationModule),
  },
  {
    path: '**',
    redirectTo: '/examples/nx-cloud-illustration',
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
