import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleOfProductComponent } from './title-of-product.component';

describe('TitleOfProductComponent', () => {
  let component: TitleOfProductComponent;
  let fixture: ComponentFixture<TitleOfProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleOfProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleOfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
