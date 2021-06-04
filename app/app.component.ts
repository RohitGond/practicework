import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  say:any;
  title = 'workexp';

  ngOnInit(){
    this.say = WelcomeComponent
  }
  hello(){
    this.say  = HelloComponent
  }
}
