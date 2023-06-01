import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  private isRegistered: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() {}

  signUp() {
    this.isRegistered.next(true);
  }

  getUser(): Observable<boolean> {
    return this.isRegistered.asObservable();
  }
}
