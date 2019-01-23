import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesIdeesComponent } from './liste-des-idees.component';

describe('ListeDesIdeesComponent', () => {
  let component: ListeDesIdeesComponent;
  let fixture: ComponentFixture<ListeDesIdeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesIdeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesIdeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
