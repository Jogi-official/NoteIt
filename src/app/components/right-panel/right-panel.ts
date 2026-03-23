import { Component, computed, effect, inject } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-right-panel',
  imports: [],
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.css',
})
export class RightPanel {
  private readonly notesService = inject(NotesService);
  todayDate: string = new Date().toDateString();
  notes = this.notesService.notes;
  percentageCompleted: Number = 0;
  constructor() {
    effect(() => {
      this.notes().forEach((note) => {
        const isToday = new Date(note.createdAt).toDateString() === this.todayDate;

        if (!isToday) {
          this.notesService.updateNote(note._id, { backlog: false }).subscribe();
        }
      });

      this.percentageCompleted = Math.abs(
        (this.completedTasks() / (this.completedTasks() + this.remainingTasks())) * 100,
      );
    });
  }

  completedTasks = computed(
    () =>
      this.notes().filter(
        (note) => new Date(note.createdAt).toDateString() === this.todayDate && note.completed,
      ).length,
  );

  backlogTasks = computed(
    () =>
      this.notes().filter(
        (note) => new Date(note.createdAt).toDateString() !== this.todayDate && !note.completed,
      ).length,
  );

  remainingTasks = computed(
    () =>
      this.notes().filter(
        (note) => new Date(note.createdAt).toDateString() === this.todayDate && !note.completed,
      ).length,
  );
}
