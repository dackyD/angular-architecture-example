import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home2Component } from './home2.component';

const routes: Routes = [
  {
    path: '',
    component: Home2Component,
    children: [
      {
        path: 'task2',
        loadChildren: () =>
          import('./task2/task2.module').then((m) => m.Task2Module),
      },
      {
        path: 'dashboard2',
        loadChildren: () =>
          import('./dashboard2/dashboard2.module').then(
            (m) => m.Dashboard2Module,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2RoutingModule {}
