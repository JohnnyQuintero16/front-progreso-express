import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasadminComponent } from './facturasadmin.component';

describe('FacturasadminComponent', () => {
  let component: FacturasadminComponent;
  let fixture: ComponentFixture<FacturasadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturasadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
