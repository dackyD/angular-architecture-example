import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { defer } from 'rxjs';

@Component({
  selector: 'my-org-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  private readonly dialog = inject(MatDialog);
  private readonly taskModal$ = defer(() =>
    import('./task-modal/task-modal.component').then(
      ({ TaskModalComponent }) => TaskModalComponent,
    ),
  );
  async createTagModal() {
    const { TaskModalComponent } = await import(
      './task-modal/task-modal.component'
    );
    this.dialog.open(TaskModalComponent);
  }

  createTagModal2() {
    this.taskModal$.subscribe((TaskModalComponent) => {
      this.dialog.open(TaskModalComponent);
    });
  }
}
