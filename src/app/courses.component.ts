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
              <br><br>
              {{ course.title }} <br>
              {{ course.students | number }} <br>
              {{ course.rating | number:'1.2-2' }} <br>
              {{ course.price | currency }} <br>
              {{ course.releaseDate | date:'mediumDate' }}
            `
})
export class CoursesComponent {
  title = "List of courses"
  courses;
  email = "me@example.com";
  imageUrl = "https://picsum.photos/400/200";
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }


  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp(email) {
    console.log(this.email);
  }
}
