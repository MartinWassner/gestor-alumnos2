import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/Models/student.model';

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

  constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null,) {
    if (data){
      this.studentform.patchValue(data)
    }
  }

  close(){
    this.dialogRef.close
  }
}
