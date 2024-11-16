import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPanel } from './layout/header-panel/header-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderPanel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  title = 'tarot-angular';
}
