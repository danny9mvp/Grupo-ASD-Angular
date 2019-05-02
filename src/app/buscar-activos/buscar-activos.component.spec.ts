import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarActivosComponent } from './buscar-activos.component';

describe('BuscarActivosComponent', () => {
  let component: BuscarActivosComponent;
  let fixture: ComponentFixture<BuscarActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
