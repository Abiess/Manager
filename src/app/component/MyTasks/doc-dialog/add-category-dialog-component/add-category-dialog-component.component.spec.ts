import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryDialogComponentComponent } from './add-category-dialog-component.component';

describe('AddCategoryDialogComponentComponent', () => {
  let component: AddCategoryDialogComponentComponent;
  let fixture: ComponentFixture<AddCategoryDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryDialogComponentComponent]
    });
    fixture = TestBed.createComponent(AddCategoryDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
