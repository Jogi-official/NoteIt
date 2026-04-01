import { Component, computed, effect, inject } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note.interface';

@Component({
  selector: 'app-right-panel',
  standalone: true,
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.css',
})
export class RightPanel {
  private readonly notesService = inject(NotesService);

  notes = this.notesService.notes;

  percentageCompleted: number = 0;

  constructor() {
    effect(() => {
      const total = this.completedTasks() + this.remainingTasks();

      this.percentageCompleted =
        total === 0 ? 0 : Math.round((this.completedTasks() / total) * 100);
    });
  }

  // ✅ Helper function
  isToday(date: string | Date): boolean {
    const today = new Date();
    const d = new Date(date);

    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  }

  isPast(date: string | Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    return d < today;
  }

  isFuture(date: string | Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const d = new Date(date);
    d.setHours(0, 0, 0, 0);

    return d > today;
  }

  // 🟢 Completed Today
  completedTasks = computed(
    () =>
      this.notes().filter((note) => note.dueDate && this.isToday(note.dueDate) && note.completed)
        .length,
  );

  // 🟡 Remaining Today
  remainingTasks = computed(
    () =>
      this.notes().filter(
        (note: Note) => note.dueDate && this.isToday(note.dueDate) && !note.completed,
      ).length,
  );

  // 🔴 Backlog (Overdue)
  backlogTasks = computed(
    () =>
      this.notes().filter(
        (note: Note) => note.dueDate && this.isPast(note.dueDate) && !note.completed,
      ).length,
  );

  // 🔵 Upcoming
  upcomingTasks = computed(
    () =>
      this.notes().filter(
        (note: Note) => note.dueDate && this.isFuture(note.dueDate) && !note.completed,
      ).length,
  );
}
