import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from '../../services/notes.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-add-task-popup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
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
      dueDate: [new Date(), Validators.required],
    });
  }

  closePopup() {
    this.closeDialog.emit();
  }

  addTask() {
    console.log(this.taskForm.value);
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
