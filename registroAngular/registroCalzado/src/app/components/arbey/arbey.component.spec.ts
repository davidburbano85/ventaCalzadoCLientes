import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbeyComponent } from './arbey.component';

describe('ArbeyComponent', () => {
  let component: ArbeyComponent;
  let fixture: ComponentFixture<ArbeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
