import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'my-org-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    // angular modules
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // material modules
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MainLayoutComponent {}
