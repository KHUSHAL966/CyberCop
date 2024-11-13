import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { ApiServiceService } from '../../../_helper/api-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  public faqform: FormGroup;
  validate: boolean;
  submitted = false;
  formSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ApiServiceService: ApiServiceService,
    private cdr: ChangeDetectorRef,
    private toaster: ToastrService,

  ) {
    this.faqform = this.createSignupForm();

  }
  createSignupForm() {
    return this.fb.group({
      fullname: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      question:["", Validators.compose([Validators.required, Validators.minLength(10)])],


    });
  }


  onSubmit() {
    this.submitted = true;

    // Check if the form is valid
    if (this.faqform.valid) {
      // Toggle validation state
      this.validate = !this.validate;

      // Prepare the request parameters from the form values
      const ReqParameter = this.faqform.value;

      // Call the API service
      this.ApiServiceService.CallApiService("Faq/Addfaq", ReqParameter)
        .pipe(first())
        .subscribe((response) => {
          if (response.status === 1) {
            // Form submission successful
            this.formSubmitted = true;  // Set the success flag to true
            this.faqform.reset();  // Reset the form

            // Optionally, clear validation state after resetting
            Object.keys(this.faqform.controls).forEach((key) => {
              const control = this.faqform.get(key);
              control?.markAsPristine();
              control?.markAsUntouched();
              control?.setErrors(null);  // Clear errors
            });

          } else {
            // Handle error response from API
            this.toaster.error(response.message);
          }
        });
    } else {
      // Handle invalid form submission
      console.log('Form is invalid');
    }
  }

}
