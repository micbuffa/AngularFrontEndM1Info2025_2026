import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AddAssignment } from './assignments/add-assignment/add-assignment';
import { AssignmentDetail } from './assignments/assignment-detail/assignment-detail';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: Assignments},
    { path: "add", component: AddAssignment },
    { path: "assignments/:id", component: AssignmentDetail },
    { path: "assignments/:id/edit", component: EditAssignmentComponent },
];
