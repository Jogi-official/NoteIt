import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  ENV_URL = 'http://localhost:3000/api/v1/notes';
  notes = signal<Notes[]>([]);

  constructor(private readonly http: HttpClient) {}

  addNote(noteData: Notes) {
    return this.http.post(`${this.ENV_URL}`, noteData);
  }

  getAllNotes() {
    return this.http.get(`${this.ENV_URL}`);
  }

  fetchAllNotes() {
    this.getAllNotes().subscribe({
      next: (res: any) => {
        this.notes.set(res.data.notes);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
