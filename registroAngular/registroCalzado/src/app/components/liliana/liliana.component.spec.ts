import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilianaComponent } from './liliana.component';

describe('LilianaComponent', () => {
  let component: LilianaComponent;
  let fixture: ComponentFixture<LilianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
