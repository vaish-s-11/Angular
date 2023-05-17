import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SasukeComponent } from './sasuke.component';

describe('SasukeComponent', () => {
  let component: SasukeComponent;
  let fixture: ComponentFixture<SasukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SasukeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SasukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});