import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTestimonialsComponent } from './list-testimonials.component';

describe('ListTestimonialsComponent', () => {
  let component: ListTestimonialsComponent;
  let fixture: ComponentFixture<ListTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
