import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './sections/nav-bar/nav-bar.component';
import { FooterComponent } from './sections/footer/footer.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ArticlesComponent } from './sections/articles/articles.component';
import { CertificatesComponent } from './sections/certificates/certificates.component';
import { FeedbackComponent } from './sections/feedback/feedback.component';
import { BigAvatarComponent } from "./sections/big-avatar/big-avatar.component";
import { ReviewsComponent } from "./sections/reviews/reviews.component";
import { ContactsComponent } from "./sections/contacts/contacts.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent,
    AboutMeComponent,
    ArticlesComponent,
    CertificatesComponent,
    FeedbackComponent,
    BigAvatarComponent,
    ReviewsComponent,
    ContactsComponent
]
})
export class AppComponent {
  title = 'diana-landing-page';
}
