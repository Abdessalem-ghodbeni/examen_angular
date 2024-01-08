import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopingComponentComponent } from './show-shoping-component.component';

describe('ShowShopingComponentComponent', () => {
  let component: ShowShopingComponentComponent;
  let fixture: ComponentFixture<ShowShopingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShopingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShopingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
