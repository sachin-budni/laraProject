import { Course } from './../model/course-module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Array<Course> = [];
  
  constructor() { 
  
  let c1: Course = new Course(1, "Java", "assets/krishna.jpg");
  let c2: Course = new Course(2, "Java", "assets/krishna.jpg");
  let c3: Course = new Course(3, "Java", "assets/krishna.jpg");
  let c4: Course = new Course(4, "Java", "assets/krishna.jpg");
  }

  ngOnInit() {
  }
}
export class CardFancyExample {}