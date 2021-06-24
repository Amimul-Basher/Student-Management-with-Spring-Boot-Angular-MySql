import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstudentComponent } from './detailstudent.component';

describe('DetailstudentComponent', () => {
  let component: DetailstudentComponent;
  let fixture: ComponentFixture<DetailstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
