import { AfterViewInit, Component, computed, ElementRef, inject, viewChild } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';
import { FormsModule } from '@angular/forms';
import { Note } from '../../../../interfaces/note.interface';
import { AddTaskPopup } from '../../../../shared/add-task-popup/add-task-popup';
import { switchMap } from 'rxjs';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [AddTaskPopup, FormsModule, TitleCasePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements AfterViewInit {
  private readonly notesService = inject(NotesService);
  isAddTaskOpen = false;
  titleInput = viewChild<ElementRef>('titleInput');
  priorityLevel = {
    low: 1,
    medium: 2,
    high: 3,
  };
  deletingNoteId: string | null = null;

  selectedNote: Note | null = null;
  notes = this.notesService.notes;

  sortedNotes = computed(() => {
    return [...this.notes()].sort((a, b) => {
      return this.priorityLevel[b.priority] - this.priorityLevel[a.priority];
    });
  });

  selectNote(note: Note) {
    this.selectedNote = note;
  }

  openAddTaskPopup(): void {
    this.isAddTaskOpen = true;
  }

  closeAddTaskPopup(): void {
    this.isAddTaskOpen = false;
  }

  onTaskToggle(note: Note, event: Event) {
    event.stopPropagation();
    note.completed = !note.completed;
    this.updateNotes(note);
  }

  onDelete(note: Note, event: Event) {
    event.stopPropagation();

    this.deletingNoteId = note._id;

    this.notesService.deleteNode(note._id).subscribe({
      next: () => {
        this.notesService.getAllNotes().subscribe((res: any) => {
          this.notesService.notes.set(res.data.notes);
          this.deletingNoteId = null;
          this.selectedNote = null;
        });
      },
      error: (err) => {
        console.error(err);
        this.deletingNoteId = null;
      },
    });
  }
  updateNotes(note: Note) {
    this.notesService
      .updateNote(note._id, { completed: note.completed })
      .pipe(switchMap(() => this.notesService.getAllNotes()))
      .subscribe({
        next: (res: any) => {
          this.notesService.notes.set(res.data.notes); //
          this.selectedNote = null;
        },
        error: (err) => console.error(err),
      });
  }
  //Hooks
  ngAfterViewInit() {
    this.titleInput()?.nativeElement.focus();
  }
}
