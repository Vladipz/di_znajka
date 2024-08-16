import { Component } from '@angular/core';
import { navLinks } from '../../constants/nav-links';
import { NavItem } from '../../data/interfaces/nav-item.interface';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  navItems: NavItem[] = navLinks;
}
