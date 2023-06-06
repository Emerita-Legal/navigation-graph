import { Type } from '@angular/core';

export interface ISubMessage {
  data: any;
}

export class SubMessage implements ISubMessage {
  constructor(public component: Type<any>, public data: any) {}
}
