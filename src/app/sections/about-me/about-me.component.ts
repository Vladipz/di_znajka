import { Component } from '@angular/core';
import { skills } from '../../constants/skills';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  skills: string[] = skills;
}
