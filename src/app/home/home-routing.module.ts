import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      TranslateModule.forChild(),
    ],
    exports: [],
    declarations: [],
  })
export class HomeRoutingModule{}
