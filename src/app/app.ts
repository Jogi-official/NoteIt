import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { NoteArea } from './components/note-area/note-area';

@Component({
  selector: 'app-root',
  imports: [Sidebar, NoteArea],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('NoteIt');
}
