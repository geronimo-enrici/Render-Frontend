import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Misrenders } from './misrenders';

describe('Misrenders', () => {
  let component: Misrenders;
  let fixture: ComponentFixture<Misrenders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Misrenders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Misrenders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
