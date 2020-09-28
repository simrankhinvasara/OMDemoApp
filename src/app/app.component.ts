import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  clickMessage = '';
  parentMessage = false;
  onClickMe() {
    this.parentMessage = true;
  }

  // constructor(private user: UserServiceService )
  // {
  //   this.user.getData().subscribe
  // }


}
