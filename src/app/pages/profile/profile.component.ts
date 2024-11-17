import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { TarotIconDirective } from '../../ui/tarot-icon.directive';

@Component({
  selector: 'profile',
  standalone: true,
  imports: [NzGridModule, NzButtonModule, TarotIconDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class Profile {}
