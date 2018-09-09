import { Component } from '@angular/core';
import { KonamiCodeService } from './konami-code.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private konamiCode: KonamiCodeService) {
    this.konamiCode.setCodeCompleteMethod(() => {
      console.warn('Konami Code Activated');
    });
  }
}
