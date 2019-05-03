import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarActivoComponent } from './crear-actualizar-activo.component';

describe('CrearActualizarActivoComponent', () => {
  let component: CrearActualizarActivoComponent;
  let fixture: ComponentFixture<CrearActualizarActivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActualizarActivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
