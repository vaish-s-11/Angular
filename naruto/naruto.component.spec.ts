import { ComponentFixture, TestBed } from '@angular/core/testing';

import { narutoComponent } from './naruto.component';

describe('NarutoComponent', () => {
  let component: narutoComponent;
  let fixture: ComponentFixture<narutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ narutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(narutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});