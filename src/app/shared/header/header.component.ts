import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsService } from '../../projects.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})


export class HeaderComponent {

  switchLang = inject(ProjectsService);

  head = 'head';
  hideDiv = 'd-none';
  hidden = 'hiden-content';
  showBurgerMenu = 'burger-menu';
  hiddenBg = 'burger-menu-bg-hidden';
  burgerMenuBg = 'burger-menu-bg';
  mobileHead = "mobile-head";
  links = 'mobile-links';


  showMenu() {
    this.hidden = this.showBurgerMenu;
    this.head = this.hideDiv;
    this.hiddenBg = this.burgerMenuBg;
    this.mobileHead = 'mobile-head';
    this.links = 'mobile-links';
  }


  closeMenu() {
    this.hidden = 'hidden-content';
    this.head = 'head';
    this.hiddenBg = 'burger-menu-bg-hidden';
    this.links = this.hideDiv;
    this.mobileHead = this.hideDiv;
  }
}
