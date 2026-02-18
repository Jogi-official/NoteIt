import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesControl } from './notes-control';

describe('NotesControl', () => {
  let component: NotesControl;
  let fixture: ComponentFixture<NotesControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesControl],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
