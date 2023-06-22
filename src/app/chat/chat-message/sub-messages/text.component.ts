import { Component, Input } from '@angular/core';
import { ISubMessage } from '../../chat-elements/subMessage';

@Component({
  template: `{{ data.text }}`,
})
export class TextComponent implements ISubMessage {
  @Input() data = { text: '' };

  ngOnInit() {
    this.typewriterEffect();
  }

  private typewriterEffect() {
    if (this.data.text.length > 0) {
      const text = this.data.text.split(' ');
      this.data.text = '';
      let i = 0;
      let interval = setInterval(() => {
        if (text[i]) this.data.text += text[i] + ' ';
        i++;
        if (i === text.length) {
          clearInterval(interval);
        }
      }, 50);
    }
  }
}
