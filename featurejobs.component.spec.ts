import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturejobsComponent } from './featurejobs.component';

describe('FeaturejobsComponent', () => {
  let component: FeaturejobsComponent;
  let fixture: ComponentFixture<FeaturejobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturejobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturejobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
