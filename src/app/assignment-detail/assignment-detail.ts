import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
  @Output()
  deleteAssignment = new EventEmitter<Assignment>();

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
    }
  }

  onDeleteAssignment() {
    // Emit an event to notify parent component to delete this assignment
    this.deleteAssignment.emit();
  }
}
