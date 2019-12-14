import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientinvoicemasterComponent } from './clientinvoicemaster.component';

describe('ClientinvoicemasterComponent', () => {
  let component: ClientinvoicemasterComponent;
  let fixture: ComponentFixture<ClientinvoicemasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientinvoicemasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientinvoicemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
