import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationArea } from './notification-area';

describe('NotificationArea', () => {
  let component: NotificationArea;
  let fixture: ComponentFixture<NotificationArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationArea],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
