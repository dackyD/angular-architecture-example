import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-home2',
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home2Component {}
