import { Component } from '@angular/core';
import { SvgImgComponent } from '../../common-ui/svg-img/svg-img.component';
import { articles } from '../../constants/articles';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [SvgImgComponent],
  templateUrl: './articles.component.html',
})
export class ArticlesComponent {
  articles: string[] = articles;
}
