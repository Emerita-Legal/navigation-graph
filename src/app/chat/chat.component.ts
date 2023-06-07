import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ChatService } from './chat.service';
import {
  Subject,
  Subscription,
  debounceTime,
  filter,
  map,
  takeUntil,
  tap,
} from 'rxjs';
import { Message } from './chat-elements/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements AfterViewInit {
  messages: Message[] = [];
  private destroySubject = new Subject<void>();
  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  constructor(private chatService: ChatService) {}

  ngAfterViewInit() {
    this.chatService.newMessage$
      .pipe(takeUntil(this.destroySubject))
      .subscribe((m) => this.addMessage(m));
  }

  private addMessage(message: Message) {
    this.messages.push(message);
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      setTimeout(
        () =>
          (this.chatContainer.nativeElement.scrollTop =
            this.chatContainer.nativeElement.scrollHeight),
        0
      );
    }
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }
}
