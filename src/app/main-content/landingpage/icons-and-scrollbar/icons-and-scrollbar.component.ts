import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-icons-and-scrollbar',
  standalone: true,
  imports: [TranslateModule],
  providers: [TranslateService],
  templateUrl: './icons-and-scrollbar.component.html',
  styleUrl: './icons-and-scrollbar.component.scss'
})


export class IconsAndScrollbarComponent {}
