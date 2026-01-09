import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { Assignments } from './assignments/assignments';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, Assignments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'MyAngular App';
}
