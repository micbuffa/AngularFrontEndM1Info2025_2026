import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id:1,
      nom: 'Math Homework',
      dateDeRendu: new Date('2023-10-01'),
      rendu: true
    },
    {
      id:2,
      nom: 'Science Project',
      dateDeRendu: new Date('2023-10-05'),
      rendu: false
    },
    {
      id:3,
      nom: 'History Essay',
      dateDeRendu: new Date('2023-10-10'),
      rendu: false
    }
  ];

  // Méthode pour récupérer tous les assignments
  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  // get assignment by id
  getAssignment(id: number): Observable<Assignment | undefined> {
    const assignment = this.assignments.find(a => a.id === id);
    return of(assignment);
  }

  // ajout d'un assignment
  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of("Assignment added successfully");
  }

  // suppression d'un assignment
  deleteAssignment(assignment: Assignment): Observable<string> {
    const index = this.assignments.indexOf(assignment);

    this.assignments.splice(index, 1);
    return of("Assignment deleted successfully");
  }

  // modification d'un assignment
  updateAssignment(assignment: Assignment): Observable<string> {
      return of("Assignment updated successfully");
  }
}
