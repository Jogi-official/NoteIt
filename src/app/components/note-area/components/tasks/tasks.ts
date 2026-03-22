import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { NotesService } from '../../../../services/notes.service';
import { FormsModule } from '@angular/forms';
import { Note } from '../../../../interfaces/note.interface';
import { AddTaskPopup } from '../../../../shared/add-task-popup/add-task-popup';

@Component({
  selector: 'app-tasks',
  imports: [AddTaskPopup, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements AfterViewInit {
  private readonly notesService = inject(NotesService);
  isAddTaskOpen = false;
  titleInput = viewChild<ElementRef>('titleInput');

  selectedNote: Note | null = null;
  notes = this.notesService.notes;

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
    this.selectNote(note);
  }

  //Hooks
  ngAfterViewInit() {
    this.titleInput()?.nativeElement.focus();
  }

  updateNotes(note: Note) {
    this.notesService.updateNote(note._id, { completed: note.completed }).subscribe({
      next: (res) => {
        console.log('Note updated successfully:', res);
        this.notesService.deleteNode(note._id).subscribe(() => {
          this.notesService.fetchAllNotes();
        });
      },
      error: (err) => {
        console.error('Error updating note:', err);
      },
    });
  }
}
