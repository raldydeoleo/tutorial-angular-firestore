import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposTableComponent } from './equipos-table.component';

describe('EquiposTableComponent', () => {
  let component: EquiposTableComponent;
  let fixture: ComponentFixture<EquiposTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
