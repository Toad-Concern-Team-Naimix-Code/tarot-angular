import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TarotIconDirective } from '../../ui/tarot-icon.directive';

@Component({
  selector: 'home',
  standalone: true,
  imports: [NzGridModule, NzButtonModule, TarotIconDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class Home {}
