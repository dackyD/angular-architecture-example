import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

}
