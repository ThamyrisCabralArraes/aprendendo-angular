import { Component } from '@angular/core';
import { Couses } from '../model/couses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses: Couses[] = [{ _id: '1', name: 'Angular', category: 'Frontend' }];
  displayedColumns = ['name', 'category'];

  constructor() {
    // this.courses = []
  }
}
