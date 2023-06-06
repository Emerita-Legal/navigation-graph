import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[subMessageHost]',
})
export class SubMessageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}