import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../../Services/estudiantes.service';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css']
})
export class EstudianteDetalleComponent {
  constructor (private readonly route: ActivatedRoute, private readonly estudiantesService: EstudiantesService) {
    this.route.params.subscribe((params) => {
      console.log(this.estudiantesService.getEstudiantePorId(params['id']))

    })
  }
}
