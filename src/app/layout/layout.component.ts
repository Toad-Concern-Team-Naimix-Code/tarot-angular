import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPanel } from './header-panel/header-panel.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [HeaderPanel, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class Layout {}
