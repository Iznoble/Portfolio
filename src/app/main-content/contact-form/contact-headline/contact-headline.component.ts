import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

@Component({
  selector: 'app-contact-headline',
  standalone: true,
  providers: [TranslateService],
  imports: [TranslateModule],
  templateUrl: './contact-headline.component.html',
  styleUrl: './contact-headline.component.scss'
})


export class ContactHeadlineComponent {}
