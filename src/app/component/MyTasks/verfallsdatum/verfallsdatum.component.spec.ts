import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfallsdatumComponent } from './verfallsdatum.component';

describe('VerfallsdatumComponent', () => {
  let component: VerfallsdatumComponent;
  let fixture: ComponentFixture<VerfallsdatumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerfallsdatumComponent]
    });
    fixture = TestBed.createComponent(VerfallsdatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
