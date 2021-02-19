import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutineCardComponent } from './rutine-card.component';

describe('RutineCardComponent', () => {
  let component: RutineCardComponent;
  let fixture: ComponentFixture<RutineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
