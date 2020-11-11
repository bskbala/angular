import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainaeraComponent } from './mainaera.component';

describe('MainaeraComponent', () => {
  let component: MainaeraComponent;
  let fixture: ComponentFixture<MainaeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainaeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainaeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
