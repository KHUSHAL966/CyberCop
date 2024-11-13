import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

  export class NavbarComponent {
    isMenuOpen: boolean = false;
    isScrolled: boolean = false;

    // Toggle menu visibility
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    // Close the menu
    closeMenu() {
      this.isMenuOpen = false;
    }

    // Detect scroll events to apply styles
    onScroll() {
      this.isScrolled = window.scrollY > 50;
    }

    // Detect scroll on component init
    ngOnInit() {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }

    // Cleanup scroll event listener
    ngOnDestroy() {
      window.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }
