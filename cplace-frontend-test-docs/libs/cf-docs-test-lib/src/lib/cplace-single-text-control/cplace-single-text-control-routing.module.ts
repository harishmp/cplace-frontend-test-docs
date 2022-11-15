import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CplaceSingleTextControlComponent } from './cplace-single-text-control.component';

const routes: Routes = [{ path: '', component: CplaceSingleTextControlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class CplaceSingleTextControlRoutingModule {}