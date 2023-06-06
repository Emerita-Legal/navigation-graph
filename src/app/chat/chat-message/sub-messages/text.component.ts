import { Component, Input } from '@angular/core';
import { ISubMessage } from '../../chat-elements/subMessage';

@Component({
  template: `{{ data.text }}`,
})
export class TextComponent implements ISubMessage {
  @Input() data = { text: ''};
}
