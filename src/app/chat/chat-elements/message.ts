import { IChart } from '../chat-message/BarChart';

export class Message {
  constructor(
    private id: number,
    private content: string,
    private timestamp: Date,
    private type: 'sent' | 'received',
    private chart?: IChart
  ) {}

  getType() {
    return this.type;
  }

  getContent() {
    return this.content;
  }

  getTimestamp() {
    return this.timestamp;
  }

  hasChart() {
    return !!this.chart;
  }

  getChart(): IChart | undefined {
    return this.chart;
  }

  getTimestampHHMM() {
    const amOrPm = this.timestamp.getHours() <= 12 ? 'AM' : 'PM';
    return (
      (this.timestamp.getHours() % 12).toString() +
      ':' +
      this.timestamp.getMinutes().toString().padStart(2, '0') +
      ' ' +
      amOrPm
    );
  }
}
