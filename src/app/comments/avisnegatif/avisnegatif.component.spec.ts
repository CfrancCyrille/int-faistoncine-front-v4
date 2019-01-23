import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisnegatifComponent } from './avisnegatif.component';

describe('AvisnegatifComponent', () => {
  let component: AvisnegatifComponent;
  let fixture: ComponentFixture<AvisnegatifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisnegatifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisnegatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
