import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowProjectComponent } from './window-project.component';

describe('WindowProjectComponent', () => {
  let component: WindowProjectComponent;
  let fixture: ComponentFixture<WindowProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
