import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesProduct } from './votes-product';

describe('VotesProduct', () => {
  let component: VotesProduct;
  let fixture: ComponentFixture<VotesProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotesProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotesProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
