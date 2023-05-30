import { Message } from './message';

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
}
