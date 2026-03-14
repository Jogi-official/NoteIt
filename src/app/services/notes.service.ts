import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  ENV_URL = 'http://localhost:3000/api/v1/notes';

  constructor(private readonly http: HttpClient) {}

  addNote(noteData: Note) {
    return this.http.post(`${this.ENV_URL}`, noteData);
  }
}
