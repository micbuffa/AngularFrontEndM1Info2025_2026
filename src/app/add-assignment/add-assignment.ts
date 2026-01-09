import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-assignment',
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
  templateUrl: './add-assignment.html',
  styleUrl: './add-assignment.css',
})
export class AddAssignment {
 nomAssignment = "";
  dateDeRendu!: Date;
  @Output()
  nouvelAssignment = new EventEmitter<Assignment>();

  onSubmit(event:any) {
      const newAssignment = new Assignment();
      newAssignment.nom = this.nomAssignment;
      newAssignment.dateDeRendu = this.dateDeRendu;
      newAssignment.rendu = false; // or true, depending on your logic
      //this.assignments.push(newAssignment);
      this.nouvelAssignment.emit(newAssignment);
    }
  
}
