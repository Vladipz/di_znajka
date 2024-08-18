import { Component } from '@angular/core';
import { ContactCardComponent } from "../../common-ui/contact-card/contact-card.component";
import { contactCard } from '../../data/interfaces/contact-card.interface';
import { cantactsItems } from '../../constants/contacts';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactCardComponent],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
contacts: contactCard[] = cantactsItems;

}
