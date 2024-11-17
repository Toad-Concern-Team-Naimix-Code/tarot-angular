import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ICONS_REGISTRY } from './icons.registry';

@Directive({
  selector: '[tarotIcon]',
  standalone: true,
})
export class TarotIconDirective implements OnInit {
  @Input('tarotIcon') iconName!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.iconName) {
      const svg = ICONS_REGISTRY[this.iconName];
      if (svg) {
        this.el.nativeElement.innerHTML = svg; // Вставка SVG кода
      }
    }
  }
}
