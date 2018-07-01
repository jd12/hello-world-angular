import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Angular App',
    isFavorite: true
  }

  onFavoriteChanged(isFavorite) {
    console.log("Favorite Changed: " + isFavorite);
  }
  
  namePattern = new RegExp("^([A-Za-z'-]+)$");
  phoneNumberPattern = new RegExp("([0-9\(\)-]+$)");


  public couldBeName(token: string) {
    return this.namePattern.test(token);
  }

  public couldBePhoneNumber(token: string) {
    return false;
  }

}
