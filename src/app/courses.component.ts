import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html' 
})
export class CoursesComponent {
  title = "List of courses"
  courses;
  email = "me@example.com";
  imageUrl = "https://picsum.photos/400/200";
  course = {
    title: "The Complete Angular Course",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet diam dolor, vitae malesuada est tristique facilisis. Vivamus viverra sodales pulvinar. Vestibulum sit amet sagittis odio. Curabitur id arcu porta, sollicitudin metus vel, tincidunt risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur dictum vulputate lacinia. Pellentesque semper quam urna, in mattis nisi aliquam et. In lacinia felis non enim feugiat, consectetur laoreet leo dapibus. Praesent in gravida massa. Morbi dignissim magna quis pulvinar pulvinar. Aenean aliquam et eros nec scelerisque. Aenean id turpis sem. Donec in pellentesque nibh. Mauris nisi nulla, condimentum quis egestas non, accumsan sit amet elit. Nam dictum augue ut turpis consectetur accumsan. Sed ante magna, blandit ac fringilla sit amet, interdum a nunc. Nam vel lobortis risus, quis commodo ligula. Donec tincidunt sit amet velit ac ornare. Donec aliquet at arcu fermentum rhoncus. Pellentesque eu consectetur lorem. Suspendisse potenti. In vestibulum enim sem. Sed id dictum quam. Suspendisse malesuada augue vel lorem egestas sollicitudin et ut velit. Phasellus luctus facilisis ultrices.",
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
