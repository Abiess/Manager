import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsformComponent } from './docsform.component';

describe('DocsformComponent', () => {
  let component: DocsformComponent;
  let fixture: ComponentFixture<DocsformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocsformComponent]
    });
    fixture = TestBed.createComponent(DocsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
