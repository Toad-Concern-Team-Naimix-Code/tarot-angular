import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'colleagues',
  standalone: true,
  imports: [NzCardModule, NzGridModule],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.css',
})
export class Colleagues {}
