import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineStudyComponent } from './online-study.component';

describe('OnlineStudyComponent', () => {
  let component: OnlineStudyComponent;
  let fixture: ComponentFixture<OnlineStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
