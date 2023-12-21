import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  async createTagModal() {
    const { TaskModalComponent } = await import(
      './task-modal/task-modal.component'
    );
    this.dialog.open(TaskModalComponent);
  }
}
