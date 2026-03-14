import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AddTaskPopup } from '../../../shared/add-task-popup/add-task-popup';
import { viewChild } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [AddTaskPopup],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements AfterViewInit {
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
