import { Component, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from '../../shared/assignments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  imports: [MatCardModule, MatCheckboxModule, CommonModule,
    MatButtonModule
  ],
  templateUrl: './assignment-detail.html',
  styleUrl: './assignment-detail.css',
})
export class AssignmentDetail implements OnInit {
  assignmentTransmis?: Assignment;

  constructor(private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // Methode appelée AVANT le rendu,
  ngOnInit(): void {
    console.log("AssignmentDetail component initialized, before rendering");
    // on va chercher les détails de l'assignment à afficher
    // dans l'URI, par exemple /assignments/3, on veut récupérer le 3
    // le + devant force la conversion en number
    const id = +this.route.snapshot.params['id'];
    console.log("Récupération de l'assignment avec id=" + id);

    // Juste pour montrer, on peut récupérer d'autres paramètres:
    this.route.snapshot.queryParams;
    this.route.snapshot.fragment;
    console.log("Query params:", this.route.snapshot.queryParams);
    console.log("Fragment:", this.route.snapshot.fragment);

    // on appelle le service
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => {
        this.assignmentTransmis = assignment;
        console.log("Détails de l'assignment reçus du service:", assignment);
      });
  }

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
    this.assignmentsService.deleteAssignment(this.assignmentTransmis!)
      .subscribe(message => {
        // on navigue ensuite vers la page d'accueil
        this.router.navigate(['/home']);
      });
  }
}
