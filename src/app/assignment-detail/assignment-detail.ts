import { Component, Input } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})
export class AssignmentDetail {
  @Input()
  assignmentTransmis?: Assignment;

  onAssignmentRendu() {
    if (this.assignmentTransmis) {
      this.assignmentTransmis.rendu = true;
    }
  }
}
