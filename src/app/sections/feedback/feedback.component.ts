import { Component } from '@angular/core';
import { FeedbackCardComponent } from '../../common-ui/feedback/feedback-card.component';
import { feedback } from '../../data/interfaces/feedback.interface';
import { feedbacks } from '../../constants/feedbacks';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FeedbackCardComponent],
  templateUrl: './feedback.component.html',
})
export class FeedbackComponent {
  feedbacks: feedback[] = feedbacks;
}
