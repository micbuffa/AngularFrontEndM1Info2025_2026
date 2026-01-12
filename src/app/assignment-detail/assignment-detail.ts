import { Component, Input } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignment-detail',
  imports: [MatCardModule, MatCheckboxModule, CommonModule,
    MatButtonModule
  ],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})
export class AssignmentDetail {
  @Input()
  assignmentTransmis?: Assignment;

  constructor(private assignmentsService: AssignmentsService) {}

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;

      // on demande au service de mettre à jour l'assignment
      this.assignmentsService.updateAssignment(this.assignmentTransmis)
        .subscribe(message => {
          console.log(message);
        });
    }
  }

  onDeleteAssignment() {
    // Emit an event to notify parent component to delete this assignment
    this.assignmentsService.deleteAssignment(this.assignmentTransmis!);

    // Pour cacher le détail après suppression
    this.assignmentTransmis = undefined;
  }
}
