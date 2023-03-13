import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTablecardComponent } from './stock-tablecard.component';

describe('StockTablecardComponent', () => {
  let component: StockTablecardComponent;
  let fixture: ComponentFixture<StockTablecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTablecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTablecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
