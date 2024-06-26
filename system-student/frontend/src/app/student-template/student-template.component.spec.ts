import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTemplateComponent } from './student-template.component';

describe('StudentTemplateComponent', () => {
  let component: StudentTemplateComponent;
  let fixture: ComponentFixture<StudentTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTemplateComponent]
    });
    fixture = TestBed.createComponent(StudentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
