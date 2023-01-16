import { Injectable } from '@angular/core';
import { Student } from '../Models/student.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor() { }

  getEstudiantePorId(id: string | number){
    return new Student(Number(id), 'Florentina', 'Lobo', true)
  }
}
