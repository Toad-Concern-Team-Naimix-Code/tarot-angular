import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'header-panel',
  standalone: true,
  imports: [NzGridModule, NzButtonModule, NzTypographyModule],
  templateUrl: './header-panel.component.html',
  styleUrl: './header-panel.component.css'
})
export class HeaderPanel {

}
