import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinallistComponent } from './finallist.component';

describe('FinallistComponent', () => {
  let component: FinallistComponent;
  let fixture: ComponentFixture<FinallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
