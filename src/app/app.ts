import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Assignments } from './assignments/assignments';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,
    MatButtonModule, MatDividerModule, MatIconModule, 
    MatToolbarModule, Assignments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Application de gestion des Assignments';
}
