import { Component, ElementRef, HostListener, output, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    CommonModule,
  ],
  templateUrl: './add-task-popup.html',
  styleUrls: ['./add-task-popup.css'],
})
export class AddTaskPopup {
  closeDialog = output<void>();
  taskForm: FormGroup;
  isOpen = false;
  selectedPriority: 'low' | 'medium' | 'high' = 'medium';
  @ViewChild('popupWrapper', { static: false }) popupWrapper!: ElementRef;
  constructor(
    private readonly fb: FormBuilder,
    private readonly notesService: NotesService,
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      dueDate: [new Date(), Validators.required],
      priority: ['medium', Validators.required],
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

  selectPriority(value: 'low' | 'medium' | 'high') {
    this.selectedPriority = value;
    this.taskForm.patchValue({ priority: value });
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    debugger;
    if (!this.popupWrapper) return; // ✅ prevent crash

    const target = event.target as HTMLElement;

    if (!this.popupWrapper.nativeElement.contains(target)) {
      this.closeDialog.emit();
    }
  }
}
