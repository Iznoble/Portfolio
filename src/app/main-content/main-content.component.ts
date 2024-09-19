import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectsService } from '../projects.service';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingpageComponent, AboutMeComponent, SkillsComponent, PortfolioProjectsComponent, ContactFormComponent, TranslateModule,],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})


export class MainContentComponent {
  switchLang = inject(ProjectsService);
}
