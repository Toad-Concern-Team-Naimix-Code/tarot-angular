import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { filter, map, Observable, Subject, tap } from 'rxjs';
import { TarotIconDirective } from '../../ui/tarot-icon.directive';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'header-panel',
  standalone: true,
  imports: [
    NzFlexModule,
    NzSegmentedModule,
    NzButtonModule,
    NzTypographyModule,
    RouterLink,
    AsyncPipe,
    TarotIconDirective,
  ],
  templateUrl: './header-panel.component.html',
  styleUrl: './header-panel.component.css',
})
export class HeaderPanel {
  constructor(private router: Router) {}

  public readonly routeUrl$: Observable<string> = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(({ urlAfterRedirects }) => urlAfterRedirects),
  );

  ngOnInit() {
    this.routeUrl$.subscribe((url) => console.log(url))
  }
}
