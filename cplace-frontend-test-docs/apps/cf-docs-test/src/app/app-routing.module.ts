import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'controls',
    loadChildren: () => import('@cplace-next/cf-docs-test-lib').then((m) => m.CplaceSingleTextControlModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class AppRoutingModule {}