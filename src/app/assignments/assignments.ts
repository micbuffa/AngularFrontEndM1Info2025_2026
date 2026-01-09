import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';


import { CommonModule } from '@angular/common';

import { Rendu } from '../shared/rendu';
import { NonRendu } from '../shared/non-rendu';
import { Assignment } from './assignment.model';
import { AssignmentDetail } from '../assignment-detail/assignment-detail';
import { AddAssignment } from '../add-assignment/add-assignment';

@Component({
  selector: 'app-assignments',
  imports: [MatDividerModule, Rendu, NonRendu, MatButtonModule, AssignmentDetail,
    MatListModule, CommonModule, AddAssignment
  ],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css',
})
export class Assignments implements OnInit {
  title = 'List of assignments';
  //ajoutActive = false;
  formVisible = false;

  assignmentSelectionne?: Assignment;

  ngOnInit(): void {
    console.log("Assignments component initialized, before rendering");
    /*
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
    */
  }
  // an array of assignments objets
  assignments = [
    {
      nom: 'Math Homework',
      dateDeRendu: new Date('2023-10-01'),
      rendu: true
    },
    {
      nom: 'Science Project',
      dateDeRendu: new Date('2023-10-05'),
      rendu: false
    },
    {
      nom: 'History Essay',
      dateDeRendu: new Date('2023-10-10'),
      rendu: false
    },
  ];


  assignmentClique(assignment: Assignment | undefined) {
    console.log("Assignment clicked:", assignment);
    this.assignmentSelectionne = assignment;

  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(nouvelAssignment: Assignment) {
    console.log("Nouvel assignment reçu:", nouvelAssignment);
    this.assignments.push(nouvelAssignment);
    this.formVisible = false;
  }
}
