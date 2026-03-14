import { CommonModule } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { Tasks } from './components/tasks/tasks';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-area',
  imports: [CommonModule, Tasks],
  templateUrl: './note-area.html',
  styleUrl: './note-area.css',
})
export class NoteArea implements OnInit {
  currentDateTime: Date = new Date();

  constructor(private readonly notesService: NotesService) {}

  ngOnInit() {
    this.notesService.fetchAllNotes();
  }

  notesCountForToday = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    return this.notesService.notes().filter((note) => {
      const noteDate = new Date(note.createdAt).toISOString().split('T')[0];
      return noteDate === today;
    }).length;
  });
}
