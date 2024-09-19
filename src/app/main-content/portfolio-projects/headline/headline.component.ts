import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

@Component({
  selector: 'app-headline',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})


export class HeadlineComponent {}
