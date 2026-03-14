import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { Tasks } from './components/tasks/tasks';

import { NotesService } from '../../services/notes.service';
import { Quote } from '../../interfaces/quote.interface';

@Component({
  selector: 'app-note-area',
  imports: [CommonModule, Tasks],
  templateUrl: './note-area.html',
  styleUrl: './note-area.css',
})
export class NoteArea implements OnInit {
  quotes = signal<Quote[]>([]);
  todayDate = new Date().toLocaleDateString();
  constructor(private readonly notesService: NotesService) {}

  ngOnInit() {
    this.notesService.fetchAllNotes();
    this.getQuotes();
  }

  quote = computed(() => {
    if (this.quotes().length === 0) {
      return { quote: '', author: '' };
    }
    const randomIndex = Math.floor(Math.random() * this.quotes().length);
    return this.quotes()[randomIndex];
  });

  notesCountForToday = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    return this.notesService.notes().filter((note) => {
      const noteDate = new Date(note.createdAt).toISOString().split('T')[0];
      return noteDate === today;
    }).length;
  });

  getQuotes() {
    this.notesService.getLocalQuotes().subscribe({
      next: (res) => {
        this.quotes.set(res);
        console.log(this.quotes().length);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
