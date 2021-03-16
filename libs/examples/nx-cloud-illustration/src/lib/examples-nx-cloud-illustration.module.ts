import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { NxCloudIllustrationComponent } from './nx-cloud-illustration/nx-cloud-illustration.component';

export const examplesNxCloudIllustrationRoutes: Route[] = [
  { path: '', component: NxCloudIllustrationComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(examplesNxCloudIllustrationRoutes),
  ],
  declarations: [NxCloudIllustrationComponent],
})
export class ExamplesNxCloudIllustrationModule {}
