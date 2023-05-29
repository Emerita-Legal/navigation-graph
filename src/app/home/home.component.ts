import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngAfterViewInit() {
    setTimeout(() => {
      (document.querySelector('.home') as any).style.opacity = 1;
    }, 500);
  }
}
