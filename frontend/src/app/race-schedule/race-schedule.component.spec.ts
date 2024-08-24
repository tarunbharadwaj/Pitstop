import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceScheduleComponent } from './race-schedule.component';

describe('RaceScheduleComponent', () => {
  let component: RaceScheduleComponent;
  let fixture: ComponentFixture<RaceScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaceScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
