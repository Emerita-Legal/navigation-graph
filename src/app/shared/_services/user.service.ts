import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  private isRegistered: BehaviorSubject<{ type: string }> = new BehaviorSubject(
    { type: 'Abogada' }
  );
  constructor() {}

  signUp(type: string) {
    this.isRegistered.next({ type });
  }

  getUser(): Observable<{ type: string }> {
    return this.isRegistered.asObservable();
  }
}
