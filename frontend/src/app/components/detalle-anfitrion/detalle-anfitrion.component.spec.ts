import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAnfitrionComponent } from './detalle-anfitrion.component';

describe('DetalleAnfitrionComponent', () => {
  let component: DetalleAnfitrionComponent;
  let fixture: ComponentFixture<DetalleAnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAnfitrionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
