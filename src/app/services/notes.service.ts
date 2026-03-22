import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  ENV_URL = 'http://localhost:3000/api/v1/notes';
  notes = signal<Note[]>([]);

  constructor(private readonly http: HttpClient) {}

  addNote(noteData: Note) {
    return this.http.post(`${this.ENV_URL}`, noteData);
  }

  getAllNotes() {
    return this.http.get(`${this.ENV_URL}`);
  }

  getLocalQuotes() {
    return this.http.get<any[]>('/quotes.json');
  }

  updateNote(noteId: string, updatedData: Partial<Note>) {
    return this.http.patch(`${this.ENV_URL}/${noteId}`, updatedData);
  }

  deleteNode(noteId: string) {
    return this.http.delete(`${this.ENV_URL}/${noteId}`);
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
