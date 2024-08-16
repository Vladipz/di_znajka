import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [NgStyle],
  template: ` <svg:use [attr.href]="href"></svg:use> `,
  styles: [''],
})
export class SvgImgComponent {
  @Input() icon: string = '';
  get href() {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
