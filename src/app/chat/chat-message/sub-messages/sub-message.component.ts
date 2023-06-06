import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Message } from '../../chat-elements/message';
import { SubMessageDirective } from '../subMessageDirective';
import { SubMessage } from '../../chat-elements/subMessage';

@Component({
  selector: 'app-sub-menssage',
  template: '<ng-template subMessageHost></ng-template>',
})
export class SubMessageComponent {
  @Input() subMessage?: SubMessage;

  @ViewChild(SubMessageDirective, { static: true })
  subMessageRef!: SubMessageDirective;

  ngOnInit() {
    const vcRef = this.subMessageRef.viewContainerRef;
    vcRef.clear();
    const componentRef = vcRef.createComponent(this.subMessage?.component!);
    componentRef.instance.data = this.subMessage?.data;
  }
}
