import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AssignmentsService } from '../../shared/assignments.service';
import { Router } from '@angular/router';

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

  constructor(private assignmentsService: AssignmentsService,
              private router: Router
  ) {}

  onSubmit(event:any) {
      const newAssignment = new Assignment();
      newAssignment.nom = this.nomAssignment;
      newAssignment.dateDeRendu = this.dateDeRendu;
      newAssignment.rendu = false; // or true, depending on your logic
      newAssignment.id = Math.floor(Math.random() * 1000000); // Assign a random id
      //this.assignments.push(newAssignment);
      //this.nouvelAssignment.emit(newAssignment);
      // on demande au service d'ajouter l'assignment
      this.assignmentsService.addAssignment(newAssignment)
        .subscribe(message => {
          console.log(message);

          // On va naviguer vers la page d'accueil après l'ajout
          this.router.navigate(['/home']);
        });
    }
  
}
