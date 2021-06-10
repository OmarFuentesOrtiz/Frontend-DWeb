import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeandoComponent } from './logeando.component';

describe('LogeandoComponent', () => {
  let component: LogeandoComponent;
  let fixture: ComponentFixture<LogeandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogeandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogeandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
