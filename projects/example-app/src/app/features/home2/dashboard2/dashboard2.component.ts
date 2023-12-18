import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrl: './dashboard2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard2Component {}
