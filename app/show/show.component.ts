import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef,Type} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';
import { Component4Component } from '../component4/component4.component';
import { Component5Component } from '../component5/component5.component';  


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {
  json:any=[];
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef })
  entry:any= ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private httpClient: HttpClient) {
    this.httpClient.get("../assets/component.json").subscribe(data =>{
      console.log(data);
      this.json = data;
   })}

   ngOnInit(): void {
   
  }

  createComponent(process: string) {
    this.entry.clear();
    if (process=='process1') {
      
   this.component1();
      this.component2();
      this.component3();
      this.component4();
      this.component5();
      
    } 
    else if (process =='process2') {
      this.component1();
      this.component2();
      this.component3();
      this.component4();
      
    }
  
    else if (process == 'process3') {
      this.component1();
      this.component2();
      this.component3();
    }
    else if (process == 'process4') {
      this.component1();
      this.component2();
    } 
    else if (process == 'process5') {
      this.component1();
    }
  


    this.componentRef.instance.message = "Called by mainComponent";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }


  selectComponent(id : string) {
    this.createComponent(id);
  }

component1(){
  const factory = this.resolver.resolveComponentFactory(Component1Component);
  this.componentRef = this.entry.createComponent(factory);
}
component2(){
  const factory = this.resolver.resolveComponentFactory(Component2Component);
  this.componentRef = this.entry.createComponent(factory);
}
component3(){
  const factory = this.resolver.resolveComponentFactory(Component3Component);
  this.componentRef = this.entry.createComponent(factory);
}
component4(){
  const factory = this.resolver.resolveComponentFactory(Component4Component);
  this.componentRef = this.entry.createComponent(factory);
}
component5(){
  const factory = this.resolver.resolveComponentFactory(Component5Component);
  this.componentRef = this.entry.createComponent(factory);
}
}


