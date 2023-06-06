import { SubMessage } from './subMessage';

export class Message {
  constructor(
    private id: number,
    private content: string,
    private timestamp: Date,
    private type: 'sent' | 'received',
    private subMessages: Array<SubMessage> = []
  ) {}

  getSubMessages() {
    return this.subMessages;
  }

  getType() {
    return this.type;
  }

  getContent() {
    return this.content;
  }

  getTimestamp() {
    return this.timestamp;
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
