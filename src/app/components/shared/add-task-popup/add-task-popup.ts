import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-add-task-popup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task-popup.html',
  styleUrls: ['./add-task-popup.css'],
})
export class AddTaskPopup {
  closeDialog = output<void>();
  taskForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly notesService: NotesService,
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  closePopup() {
    this.closeDialog.emit();
  }

  addTask() {
    this.notesService.addNote(this.taskForm.value).subscribe({
      next: (_res) => {
        this.notesService.fetchAllNotes();
        this.closePopup();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
