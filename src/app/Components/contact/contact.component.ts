import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServiceService } from '../../../_helper/api-service.service';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public contactform: FormGroup;
  validate: boolean;
  isDialogVisible = false; // Control visibility of the dialog


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ApiServiceService: ApiServiceService,
    private cdr: ChangeDetectorRef,
    private toaster: ToastrService,

  ) {
    this.contactform = this.createSignupForm();

  }
  createSignupForm() {
    return this.fb.group({
      fullname: ["", Validators.compose([Validators.required])],
      contactNo: ["", Validators.compose([Validators.required, Validators.minLength(10)])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      message: ["",],



    });
  }


  submit() {
    // Check if the form is valid
    if (this.contactform.valid) {
      // Toggle validation state
      this.validate = !this.validate;

      // Prepare the request parameters from the form values
      const ReqParameter = this.contactform.value;

      // Call the API service
      this.ApiServiceService.CallApiService("Contactus/AddContactus", ReqParameter)
        .pipe(first())
        .subscribe((response) => {
          if (response.status === 1) {
            this.isDialogVisible = true;
            this.contactform.reset();

            this.toaster.success('Your information has been sent to Cyber Cop. We will contact you soon!');
            setTimeout(() => {
              this.closeDialog(); // Close dialog after 3 seconds
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
  closeDialog() {
    this.isDialogVisible = false;
  }
}


