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
    return new Message(message.getId() + 1, '', new Date(), 'received', [
      new SubMessage(TextComponent, {
        text: `La probabilidad de éxito con los factores que indicas es del 62%. Para ello, he considerado
          la tasa de éxito en casos de despido disciplinario en los que se defiende al trabajador en los
          Juzgados de lo Social de A Coruña de los últimos cinco años y la tasa de éxito promedio del
          abogado contrario con los mismos factores.`,
      }),
      new SubMessage(TextComponent, {
        text: `Aquí puedes ver la representación gráfica de las tasas de éxito.`,
      }),
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
        text: `Tasa de éxito de Pablo Luis Vazquez García en despidos disciplinarios.`,
      }),
      new SubMessage(CircleChartComponent, { value: 20, mediaValue: 34 }),
      new SubMessage(TextComponent, {
        text: `Puedo ser más preciso calculando la probabilidad de éxito. ¿Quieres incluir
          otros factores como el Juez o la normativa aplicable?`,
      }),
    ]);
  }
}
