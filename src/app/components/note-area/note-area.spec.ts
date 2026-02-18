import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteArea } from './note-area';

describe('NoteArea', () => {
  let component: NoteArea;
  let fixture: ComponentFixture<NoteArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteArea],
    }).compileComponents();

    fixture = TestBed.createComponent(NoteArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
