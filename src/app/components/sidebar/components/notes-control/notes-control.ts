import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { AddTaskPopup } from '../../../shared/add-task-popup/add-task-popup';

@Component({
  selector: 'app-notes-control',
  imports: [AddTaskPopup],
  templateUrl: './notes-control.html',
  styleUrl: './notes-control.css',
})
export class NotesControl implements AfterViewInit {
  isAddTaskOpen = false;
  titleInput = viewChild<ElementRef>('titleInput');

  openAddTaskPopup(): void {
    this.isAddTaskOpen = true;
  }

  closeAddTaskPopup(): void {
    this.isAddTaskOpen = false;
  }

  //Hooks
  ngAfterViewInit() {
    this.titleInput()?.nativeElement.focus();
  }
}
