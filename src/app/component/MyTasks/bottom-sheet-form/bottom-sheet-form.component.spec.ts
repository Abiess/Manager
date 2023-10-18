import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetFormComponent } from './bottom-sheet-form.component';

describe('BottomSheetFormComponent', () => {
  let component: BottomSheetFormComponent;
  let fixture: ComponentFixture<BottomSheetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetFormComponent]
    });
    fixture = TestBed.createComponent(BottomSheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
