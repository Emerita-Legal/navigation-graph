import { Injectable } from '@angular/core';
import { Conversation } from './chat-elements/conversation';
import { Message } from './chat-elements/message';
import { BehaviorSubject, Observable, debounceTime } from 'rxjs';
import { SubMessage } from './chat-elements/subMessage';
import { TextComponent } from './chat-message/sub-messages/text.component';
import { LineChartComponent } from './chat-message/sub-messages/line-chart.component';
import { CircleChartComponent } from './chat-message/sub-messages/circle-chart.component';
import { TopicService } from '../topic-panel/_services/topic.service';

@Injectable()
export class ChatService {
  messageId = 0;
  private conversation: BehaviorSubject<Conversation> =
    new BehaviorSubject<Conversation>(new Conversation());
  constructor(private topicService: TopicService) {}

  addMessage(message: Message) {
    this.conversation.getValue().addMessage(message);
    this.generateResponse(message);
    this.conversation.next(this.conversation.getValue());
  }

  getConversationObservable(): Observable<Conversation> {
    return this.conversation.asObservable();
  }

  private generateResponse(message: Message) {
    /* Timeout to mock real response generation time */
    setTimeout(() => {
      this.conversation.getValue().addMessage(
        new Message(
          ++this.messageId,
          `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
        Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
          new Date(),
          'received',
          [
            new SubMessage(TextComponent, {
              text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
              Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
            }),
            new SubMessage(LineChartComponent, [
              { year: 2018, global: 70, media: 70 },
              { year: 2019, global: 40, media: 40 },
              { year: 2020, global: 40, media: 40 },
              { year: 2021, global: 30, media: 30 },
              { year: 2022, global: 80, media: 80 },
              { year: 2023, global: 100, media: 100 },
            ]),
            new SubMessage(TextComponent, {
              text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
            }),
            new SubMessage(CircleChartComponent, { value: 20, mediaValue: 34 }),
            new SubMessage(TextComponent, {
              text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Labore a voluptates corporis illum quae, quasi esse dicta vitae maxime aspernatur? 
              Earum atque reiciendis odit molestiae culpa quisquam fuga repellat`,
            }),
          ]
        )
      );
      this.topicService.emitChatTopic();
    }, 1000);
  }
}
