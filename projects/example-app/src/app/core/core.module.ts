import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [],
  imports: [
    // standalone components
    MainLayoutComponent,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule {}
