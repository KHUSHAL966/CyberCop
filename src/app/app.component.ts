import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./Components/contact/contact.component";
import { AboutComponent } from "./Components/about/about.component";


import { FooterComponent } from "../shared/footer/footer.component";
import { PortfolioComponent } from "./Components/portfolio/portfolio.component";
import { FaqComponent } from "./Components/faq/faq.component";

import { TestimonialComponent } from "./Components/testimonial/testimonial.component";

import { CommonModule } from '@angular/common';
import { LandingComponent } from './Components/landing/landing.component';
import { NavbarComponent } from '../shared/footer/navbar/navbar.component';
import { ListTestimonialsComponent } from "./Components/Admin/list-testimonials/list-testimonials.component";
import { ListingTechnologiesComponent } from "./Components/Admin/listing-technologies/listing-technologies.component";
import { BlogComponent } from "./Components/blog/blog.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, AboutComponent, LandingComponent, NavbarComponent, FooterComponent, PortfolioComponent, FaqComponent,  TestimonialComponent, CommonModule, ListTestimonialsComponent, ListingTechnologiesComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CyberCop';
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300; // Show button when scrolled down 300px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
