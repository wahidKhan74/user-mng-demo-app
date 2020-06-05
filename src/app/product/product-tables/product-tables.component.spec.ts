import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTablesComponent } from './product-tables.component';

describe('ProductTablesComponent', () => {
  let component: ProductTablesComponent;
  let fixture: ComponentFixture<ProductTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
