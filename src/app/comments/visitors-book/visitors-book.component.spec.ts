import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsBookComponent } from './visitors-book.component';

describe('VisitorsBookComponent', () => {
  let component: VisitorsBookComponent;
  let fixture: ComponentFixture<VisitorsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
