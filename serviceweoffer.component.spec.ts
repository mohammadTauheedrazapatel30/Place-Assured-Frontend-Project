import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceweofferComponent } from './serviceweoffer.component';

describe('ServiceweofferComponent', () => {
  let component: ServiceweofferComponent;
  let fixture: ComponentFixture<ServiceweofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceweofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceweofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
