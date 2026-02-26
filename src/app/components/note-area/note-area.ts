import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tasks } from './components/tasks/tasks';

@Component({
  selector: 'app-note-area',
  imports: [CommonModule, Tasks],
  templateUrl: './note-area.html',
  styleUrl: './note-area.css',
})
export class NoteArea {
  currentDateTime: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
