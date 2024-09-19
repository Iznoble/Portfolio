import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  constructor(private translate: TranslateService) {}


  skillIcons = [
    {
      icon: 'Property 1=JavScript.png',
      iconText: 'JavaScript',
    },
    {
      icon: 'Property 1=Angular.png',
      iconText: 'Angular',
    },
    {
      icon: 'Property 1=Typescript.png',
      iconText: 'Typescript',
    },
    {
      icon: 'Property 1=html.png',
      iconText: 'HTML',
    },
    {
      icon: 'Property 1=Git.png',
      iconText: 'Git',
    },
    {
      icon: 'Property 1=Firebase.png',
      iconText: 'Firebase',
    },
    {
      icon: 'Property 1=css.png',
      iconText: 'CSS',
    },
    {
      icon: 'Property 1=Scrum.png',
      iconText: 'Scrum',
    },
    {
      icon: 'Property 1=Api.png',
      iconText: 'Rest-Api',
    },
    {
      icon: 'Property 1=Matirial.png',
      iconText: 'Material design',
    },
  ];

  hoverInfo = [
    {
      coverImg: 'join_cover.png',
      showInfo: false,
      bgImage: 'join.png',
      gitRepositories: 'https://github.com/Iznoble/Join.git',
      liveTest: 'https://denis-kusmitschev.com/Join/log-in.html',
      title: 'Join',
      description:
        this.translate.instant('PORTFOLIO.JOIN_INFO'),
      usedLanguage: 'HTML | CSS | JavaScript',
    },
    {
      coverImg: 'Pollo loco 1.png',
      showInfo: false,
      bgImage: 'startscreen_1.png',
      gitRepositories: 'https://github.com/Iznoble/El-pollo-loko.git',
      liveTest: 'https://denis-kusmitschev.com/Games/index.html',
      title: 'Ell Pollo Loco',
      description:
        this.translate.instant('PORTFOLIO.LOCO_INFO'),
      usedLanguage: 'HTML | CSS | JavaScript',
    },
  ];


  chanceLang(lang: string) {
    this.translate.use(lang);
  }
}
