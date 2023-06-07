import { CircleChartComponent } from '../chat-message/sub-messages/circle-chart.component';
import { LineChartComponent } from '../chat-message/sub-messages/line-chart.component';
import { TextComponent } from '../chat-message/sub-messages/text.component';
import { Message } from './message';
import { SubMessage } from './subMessage';

export class Conversation {
  private messages: Message[] = [];

  constructor(messages?: Message[]) {
    if (messages) {
      this.messages = messages;
    }
  }

  getMessages() {
    return this.messages;
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  addAutomaticResponse(message: Message) {
    const response = this.generateResponse(message);
    this.addMessage(response);
    return response;
  }

  private generateResponse(message: Message): Message {
    return new Message(
      message.getId() + 1,
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
    );
  }
}
