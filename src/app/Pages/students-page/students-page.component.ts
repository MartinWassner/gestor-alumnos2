import { Component } from '@angular/core';
import { Student } from '../../Models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent {

  students: Student[] = [
    new Student(1, 'Florentina', 'Lobo', true),
    new Student(2, 'Adela', 'Salinas', true),
    new Student(3, 'Dina', 'Viteri', false),
    new Student(4, 'Santiago', 'Vega', true),
    new Student(1, 'Marisol', 'Nuñez', false)
  ]
displayedColumns = ['id', 'firstName','lastName','isActive','edit','delete'];

}
