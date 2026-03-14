import { Component, signal } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { NoteArea } from './components/note-area/note-area';
import { RightPanel } from './components/right-panel/right-panel';

@Component({
  selector: 'app-root',
  imports: [Sidebar, NoteArea, RightPanel],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('NoteIt');
}
