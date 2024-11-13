import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';

import { ApiServiceService } from '../../../_helper/api-service.service';
import { TechnologiesFilter } from '../../../_models/TechnologiesFilter';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  Technologies: any;
  TechnologiesFilter:TechnologiesFilter

  constructor( private ApiService:ApiServiceService,private toaster: ToastrService){
    this.TechnologiesloadData()
}

TechnologiesloadData(){
  //

  this.ApiService.CallApiService('Technologies/ListTechnologies',this.TechnologiesFilter).pipe(first()).subscribe((resp) => {


    let response = resp;



this.Technologies =response.data['result'] ;






  });

}




  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
