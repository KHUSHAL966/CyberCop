import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTechnologiesComponent } from './listing-technologies.component';

describe('ListingTechnologiesComponent', () => {
  let component: ListingTechnologiesComponent;
  let fixture: ComponentFixture<ListingTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
