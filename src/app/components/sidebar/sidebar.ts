import { Component } from '@angular/core';
import { NotificationArea } from './components/notification-area/notification-area';
import { NotesControl } from './components/notes-control/notes-control';

@Component({
  selector: 'app-sidebar',
  imports: [NotificationArea, NotesControl],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}
