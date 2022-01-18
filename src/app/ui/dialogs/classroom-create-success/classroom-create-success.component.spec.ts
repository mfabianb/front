import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCreateSuccessComponent } from './classroom-create-success.component';

describe('ClassroomCreateSuccessComponent', () => {
  let component: ClassroomCreateSuccessComponent;
  let fixture: ComponentFixture<ClassroomCreateSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomCreateSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomCreateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
