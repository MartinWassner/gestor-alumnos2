import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student.model';
import { BehaviorSubject, catchError, of, take, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  public student$: Observable<Student[]>;
  private student = new BehaviorSubject<Student[]>([]);

  constructor(
    private httpClient: HttpClient
  ) {
    this.student$ = this.student.asObservable();
    this.getAlumnosFromAPI().subscribe(stu => {
      this.student.next(stu);
    });
  }

  // getEstudiantePorId(id: string | number){
  //   return new Student(Number(id), 'Florentina', 'Lobo', true)
  // }

  getAlumnosFromAPI(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('https://mockapi.io/projects/63cb15c9d0ab64be2b5fc2ac/alumnos')
  }

  eliminarAlumno(student: Student) {
    this.httpClient.delete(`https://mockapi.io/projects/63cb15c9d0ab64be2b5fc2ac/${student.id}`).subscribe(_ => {
      let nuevaLista = this.student.getValue().filter(p => p.id !== student.id);
      this.student.next(nuevaLista);
  });

}

  agregarAlumno(student: Student) {

    
      this.httpClient.post(`https://mockapi.io/projects/63cb15c9d0ab64be2b5fc2ac/alumnos`, student).subscribe({
        next: _ => {
          let nuevaLista = this.student.getValue();
          nuevaLista.push(student);
          this.student.next(nuevaLista);
        },
        error: _ => {
          alert('Error!!');
        }
      });

    }
  }
