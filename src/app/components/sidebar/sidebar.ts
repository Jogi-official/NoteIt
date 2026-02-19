import { Component } from '@angular/core';
import { NotificationArea } from './components/notification-area/notification-area';
import { NotesControl } from './components/notes-control/notes-control';
import { MyProjects } from './components/my-projects/my-projects';

@Component({
  selector: 'app-sidebar',
  imports: [NotificationArea, NotesControl, MyProjects],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}
