import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    "name": "Fruit",
    "children": [
      {"name": 'Apple'},
      {"name": "Banana"},
      {"name": "Fruit loops"},
    ]
  },
   {
    "name": "Vegetables",
    "children": [
      {
        "name": "Green",
        "children": [
          {"name": "Broccoli"},
          {"name": "Brussels sprouts"},
        ]
      }, {
        "name": "Orange",
        "children": [
          {"name": "Pumpkins"},
          {"name": "Carrots"},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() { 
    if(this.IsValidJSONData(TREE_DATA)){
      
      this.dataSource.data = TREE_DATA;
      console.log(this.dataSource.data);
    }else{
      console.log("error");
      
    }
   if(TREE_DATA === null){
 
     this.dataSource.data = TREE_DATA;
   }
  }
 IsValidJSONData(str : any) {
    try {
        JSON.stringify(str);
    } catch (e) {
        return false;
    }
    return true;
}

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
this.dataSource.data = this.first(TREE_DATA);
  }
first(value : any){
if(!value){
  console.log('json file is empty');
  return value;
}else{
  console.log(value);
  
}
}
//////////////////////////first case//////////
// first(value : any){
// if(value.length === 1){
//   console.log('json file has only one element');
//   return value;
// }else{
//   console.log(value);
  
// }
// }

////////////////////second case///////////
// first(value : any){
// if(value.lengt){
//   console.log('json file is empty');
//   return value;
// }else{
//   console.log(value);
  
// }
// }

//////////////////third case///////////
// first(value : any){
//   for(let eachvalue of value){
// if(value.children){
//   console.log('json file is nested');
//   return value;
// }else{
//   console.log(value);
  
// }
// }

// }
////////////////////fourth case//////////////////
// first(value : any){
// if(!value){
//   console.log('json file is empty');
//   return value;
// }else{
//   console.log(value);
  
// }
// }
///////////////////fifth case///////////////
// first(value : any){
// if(!value){
//   console.log('json file is empty');
//   return value;
// }else{
//   console.log(value);
  
// }
// }
}












