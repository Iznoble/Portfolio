import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


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
