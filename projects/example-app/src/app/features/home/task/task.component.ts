import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-org-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {

}
