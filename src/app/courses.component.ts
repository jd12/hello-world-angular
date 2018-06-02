import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
              <h2>{{ title  }}</h2>
              <ul>
                  <li *ngFor="let course of courses">{{ course }}</li>
              </ul>
              <!-- Property bingding -->
              <img [src]="imageUrl" />
              <br>
              <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
            `
})
export class CoursesComponent {
  title = "List of courses"
  courses;
  email = "me@example.com";
  imageUrl = "https://picsum.photos/400/200";



  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp(email) {
    console.log(this.email);
  }
}
