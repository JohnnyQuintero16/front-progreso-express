import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteloginComponent } from './clientelogin.component';

describe('ClienteloginComponent', () => {
  let component: ClienteloginComponent;
  let fixture: ComponentFixture<ClienteloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
