import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
})
export class ChatInputComponent {
  constructor(private router: Router) {}
  onMessageSent() {
    this.router.navigate(['/panel/chat']);
  }

  onKeyPress(event: any) {
    if (event.ctrlKey && event.key === 'Enter') {
      (document.querySelector('textarea') as any).value += '\n';
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.onMessageSent();
    }
  }
}
