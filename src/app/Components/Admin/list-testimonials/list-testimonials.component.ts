import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ApiServiceService } from '../../../../_helper/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-testimonials',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './list-testimonials.component.html',
  styleUrl: './list-testimonials.component.scss'
})
export class ListTestimonialsComponent {
  public  serviceForm : FormGroup

  validate: boolean;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ApiServiceService: ApiServiceService,
    private cdr: ChangeDetectorRef,
    private toaster: ToastrService,

  ) {
    this.serviceForm = this.createSignupForm();

  }
  createSignupForm() {
    return this.fb.group({
      serviceName: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  onSubmit() {
    // Check if the form is valid
    if (this.serviceForm.valid) {
      // Toggle validation state
      this.validate = !this.validate;

      // Prepare the request parameters from the form values
      const ReqParameter = this.serviceForm.value;

      // Call the API service
      this.ApiServiceService.CallApiService("Testimonials/AddTestimonials", ReqParameter)
        .pipe(first())
        .subscribe((response) => {
          if (response.status === 1) {

            this.serviceForm.reset();

            this.toaster.success(response.message);

            setTimeout(() => {
              window.location.reload();
            }, 3000);
          } else {

            this.toaster.error(response.message);
          }
        });
    } else {
      // Handle invalid form submission
      console.log('Form is invalid');
    }
  }

}

