import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './feedback-card.component.html',
  styleUrl: './test.css',
  host: {"class":'flex break-inside-avoid flex-col gap-3 rounded-xl bg-white p-4'}
})
export class FeedbackCardComponent {
  @Input() rating: number = 0;
  @Input() feedback: string = '';
  @Input() name: string = '';
  public get stars(): boolean[] {
    const fullStars = Math.floor(this.rating);
    const emptyStars = 5 - fullStars;

    return [...Array(fullStars).fill(true), ...Array(emptyStars).fill(false)];
  }

  // @HostBinding('class') HostClasses =
  //   'flex break-inside-avoid flex-col gap-3 rounded-xl bg-white p-4';
}
