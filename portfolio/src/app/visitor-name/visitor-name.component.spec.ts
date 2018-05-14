import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNameComponent } from './visitor-name.component';

describe('VisitorNameComponent', () => {
  let component: VisitorNameComponent;
  let fixture: ComponentFixture<VisitorNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
