import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvispositifComponent } from './avispositif.component';

describe('AvispositifComponent', () => {
  let component: AvispositifComponent;
  let fixture: ComponentFixture<AvispositifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvispositifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvispositifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
