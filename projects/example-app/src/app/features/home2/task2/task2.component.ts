import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-task2',
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Task2Component {}
