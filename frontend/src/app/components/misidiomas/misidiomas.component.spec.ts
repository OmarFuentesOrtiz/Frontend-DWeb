import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisidiomasComponent } from './misidiomas.component';

describe('MisidiomasComponent', () => {
  let component: MisidiomasComponent;
  let fixture: ComponentFixture<MisidiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisidiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisidiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
