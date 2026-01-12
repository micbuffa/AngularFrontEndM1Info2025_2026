import { Routes } from '@angular/router';
import { Assignments } from './assignments/assignments';
import { AddAssignment } from './add-assignment/add-assignment';
import { AssignmentDetail } from './assignment-detail/assignment-detail';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: Assignments},
    { path: "add", component: AddAssignment },
    { path: "assignments/:id", component: AssignmentDetail },
];
