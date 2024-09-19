import { Component, inject } from '@angular/core';
import { HeadlineComponent } from './headline/headline.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../projects.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  providers: [TranslateService],
  imports: [HeadlineComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss', './portfolio-projects-mobile.component.scss'],
})


export class PortfolioProjectsComponent {

  projectArray = inject(ProjectsService);
  cover: string = 'project';
  info: string = 'hover-info';
  hide: string = 'd-none';
}
