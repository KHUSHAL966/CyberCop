import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiServiceService } from '../../../_helper/api-service.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ServiceFilter } from '../../../_models/ServiceFilter';


@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})

export class TestimonialComponent {
  Testimonials: any;
  ServiceFilter: ServiceFilter

  constructor(private ApiService: ApiServiceService, private toaster: ToastrService) {
    this.TestimonialsloadData()
  }

  TestimonialsloadData() {
    this.ApiService.CallApiService('Testimonials/ListTestimonials', this.ServiceFilter).pipe(first()).subscribe((resp) => {
      let response = resp;
      this.Testimonials = response.data['result'];
    });

  }

}
