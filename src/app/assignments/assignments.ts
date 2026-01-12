import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

import { Rendu } from '../shared/rendu';
import { NonRendu } from '../shared/non-rendu';
import { Assignment } from './assignment.model';
import { AssignmentDetail } from '../assignment-detail/assignment-detail';
import { AddAssignment } from '../add-assignment/add-assignment';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-assignments',
  imports: [MatDividerModule, Rendu, NonRendu, MatButtonModule, AssignmentDetail,
    MatListModule, CommonModule, AddAssignment, RouterLink
  ],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css',
})
export class Assignments implements OnInit {
  title = 'List of assignments';
  //ajoutActive = false;
  formVisible = false;
  assignmentSelectionne?: Assignment;
  // an array of assignments objets
  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService) {
  }

  // appelé avant le rendu, c'est une méthode du cycle de vie 
  // d'un composant
  ngOnInit(): void {
    console.log("Assignments component initialized, before rendering");
 
    this.assignmentsService.getAssignments()
      .subscribe(assignents => {
        this.assignments = assignents;
        console.log("Données des assignments reçues du service:");
      });

      console.log("Demande de récupération des assignments envoyée au service.");

  }


  assignmentClique(assignment: Assignment | undefined) {
    console.log("Assignment clicked:", assignment);
    this.assignmentSelectionne = assignment;

  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  // ajout d'une méthode pour gérer l'événement nouvelAssignment
  onNouvelAssignment(nouvelAssignment: Assignment) {
    console.log("Nouvel assignment reçu:", nouvelAssignment);
    //this.assignments.push(nouvelAssignment);
    this.formVisible = false;
  }

  // méthode pour gérer la suppression d'un assignment
  onDeleteAssignment() {
    console.log("########Suppression de l'assignment transmis");
      // Pour ne plus que le détail de cet assignment s'affiche
      this.assignmentSelectionne = undefined;
  }
}
