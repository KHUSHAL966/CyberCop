import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), // Initial state
        animate('1s ease-out', style({ opacity: 1 })) // End state
      ]),
      transition(':leave', [
        animate('1s ease-out', style({ opacity: 0 })) // Fade out
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-50px)', opacity: 0 }), // Initial position
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // End position
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateY(-50px)', opacity: 0 })) // Slide out
      ])
    ])
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
 slides = [
    {
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=1080',
      title: 'First Slide',
      description: 'This is the first slide description.',
      active: true
    },
    {
      image: 'https://images.unsplash.com/photo-1491897352368-e0db042c7c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=1080',
      title: 'Second Slide',
      description: 'This is the second slide description.',
      active: false
    },
    {
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=1080',
      title: 'Third Slide',
      description: 'This is the third slide description.',
      active: false
    }
  ];
}
