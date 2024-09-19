import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService, } from '@ngx-translate/core';



@Component({
  selector: 'app-about-me',
  standalone: true,
  providers: [TranslateService],
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent {}
