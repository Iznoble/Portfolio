import { Component, inject } from '@angular/core';
import { IconsAndScrollbarComponent } from './icons-and-scrollbar/icons-and-scrollbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  providers: [TranslateService],
  imports: [IconsAndScrollbarComponent, TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss', './landingpage-mobile.component.scss']
})


export class LandingpageComponent {
  switchLang = inject(ProjectsService);
}
