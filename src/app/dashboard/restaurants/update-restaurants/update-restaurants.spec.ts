import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRestaurants } from './update-restaurants';

describe('UpdateRestaurants', () => {
  let component: UpdateRestaurants;
  let fixture: ComponentFixture<UpdateRestaurants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRestaurants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRestaurants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
