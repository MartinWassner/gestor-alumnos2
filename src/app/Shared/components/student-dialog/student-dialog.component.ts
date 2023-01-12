import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent {
  firstNameControl = new FormControl('')
  lastNameControl = new FormControl('')
  studentform = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl
  })

  constructor(private readonly dialogRef: DialogRef) {}

  close(){
    this.dialogRef.close
  }
}
