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
              <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
            `
})
export class CoursesComponent {
  title = "List of courses"
  courses;
  imageUrl = "https://picsum.photos/400/200";
  isActive = true;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
