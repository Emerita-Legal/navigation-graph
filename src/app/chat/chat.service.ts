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
          `La probabilidad de éxito con los factores que indicas es del 62%. Para ello, he considerado
          la tasa de éxito en casos de despido disciplinario en los que se defiende al trabajador en los
          Juzgados de lo Social de A Coruña de los últimos cinco años y la tasa de éxito promedio del
          abogado contrario con los mismos factores.
          Aquí puedes ver la representación gráfica de las tasas de éxito.`,
          new Date(),
          'received',
          [
            new SubMessage(TextComponent, {
              text: `Juzgado de lo Social de A Coruña - Evolución de la tasa de éxito en casos de despido
              disciplinario defendiendo al trabajador.`,
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
              text: `Tasa de éxito de Pablo Luis Vázquez García en despidos disciplinarios.`,
            }),
            new SubMessage(CircleChartComponent, { value: 20, mediaValue: 34 }),
            new SubMessage(TextComponent, {
              text: `Puedo ser más preciso calculando la probabilidad de éxito. ¿Quieres incluir
              otros factores?`,
            }),
          ]
        )
      );
      this.topicService.emitChatTopic();
    }, 1000);
  }
}
