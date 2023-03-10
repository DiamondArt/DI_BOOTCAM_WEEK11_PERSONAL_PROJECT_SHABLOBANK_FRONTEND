import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksTradingComponent } from './stocks-trading.component';

describe('StocksTradingComponent', () => {
  let component: StocksTradingComponent;
  let fixture: ComponentFixture<StocksTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksTradingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocksTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
