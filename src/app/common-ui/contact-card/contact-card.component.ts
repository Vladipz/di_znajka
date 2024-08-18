import { Component, Input } from '@angular/core';
import { SvgImgComponent } from '../svg-img/svg-img.component';
import { contactCard } from '../../data/interfaces/contact-card.interface';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [SvgImgComponent],
  templateUrl: './contact-card.component.html',
  host: {
    class: 'relative flex h-52 w-full rounded-2xl',
  },
})
export class ContactCardComponent {
  @Input() data: contactCard = {
    link: '',
    icon: '',
    phrase: '',
    social: '',
    nickname: '',
  };
}
