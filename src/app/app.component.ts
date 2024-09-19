import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent} from './shared/header/header.component';
import { animate, trigger } from '@angular/animations';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations : [animate, trigger],
})


export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit() {
    import('aos').then(AOS => {
      AOS.init();
    });
  }
}
