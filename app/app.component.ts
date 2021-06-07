import { Component } from '@angular/core';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
const data = [
  {
   "process" : "process1",
   "components" : [
      {"component":"component1"},
      {"component": "component2"},
      {"component": "component3"},
      {"component": "component4"},
      {"component": "component5"},
      ]
  
  },
  {
   "process" : "process2",
   "components" : [
      {"component":"component1"},
      {"component": "component2"},
      {"component": "component3"},
      {"component": "component4"}
   ]
  },
  {
   "process" : "process3",
   "components" : [
      {"component":"component1"},
      {"component": "component2"},
      {"component": "component3"}
    ]
  },
  {
   "process" : "process4",
   "components" : [
      {"component":"component1"},
      {"component": "component2"}
    ]
  },
  {
   "process" : "process5",
   "components" : [
      {"component":"component1"},
  
    ]
  }
  ]


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
    this.process(data);
  }
  hello(){
    this.say  = HelloComponent
  }
  process(key : any){
    for(let value of key){


    }
  }
}
