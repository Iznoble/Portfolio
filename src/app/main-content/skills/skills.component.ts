import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

AOS.init();

@Component({
  selector: 'app-skills',
  standalone: true,
  providers: [TranslateService],
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills-mobile.component.scss']
})


export class SkillsComponent {

  iconArray = inject(ProjectsService);
  hoverAnimation = 'mouseAnimation';

  
  jump(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('mouseAnimation');
  }


  removeAnimation(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('mouseAnimation');
  }
}
