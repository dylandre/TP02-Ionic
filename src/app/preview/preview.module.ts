import { NgModule } from '@angular/core';
import {APP_BASE_HREF, CommonModule, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewPageRoutingModule } from './preview-routing.module';

import { PreviewPage } from './preview.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';
import { RouterModule } from '@angular/router';
import {HomePage} from '../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: PreviewPage
      }
    ])
  ],
  declarations: [PreviewPage],
  providers: [CameraPreview]
})
export class PreviewPageModule {}
