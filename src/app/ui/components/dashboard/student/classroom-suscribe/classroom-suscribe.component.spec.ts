import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSuscribeComponent } from './classroom-suscribe.component';

describe('ClassroomSuscribeComponent', () => {
  let component: ClassroomSuscribeComponent;
  let fixture: ComponentFixture<ClassroomSuscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomSuscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomSuscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
