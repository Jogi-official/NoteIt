import { Component } from '@angular/core';
import { AddTaskPopup } from '../../../shared/add-task-popup/add-task-popup';

@Component({
  selector: 'app-notes-control',
  imports: [AddTaskPopup],
  templateUrl: './notes-control.html',
  styleUrl: './notes-control.css',
})
export class NotesControl {
  showPopup = false;

  openAddtaskPopup() {
    console.log('clicked');
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
