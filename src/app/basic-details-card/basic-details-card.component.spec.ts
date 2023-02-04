import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetailsCardComponent } from './basic-details-card.component';

describe('BasicDetailsCardComponent', () => {
  let component: BasicDetailsCardComponent;
  let fixture: ComponentFixture<BasicDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
