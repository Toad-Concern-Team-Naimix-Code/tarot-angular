import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [NzGridModule, NzButtonModule, NzTypographyModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class Landing {}
