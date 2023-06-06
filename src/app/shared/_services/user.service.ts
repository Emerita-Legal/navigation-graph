import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  private user: BehaviorSubject<{ type: string } | null> = new BehaviorSubject<{
    type: string;
  } | null>(null);

  constructor() {}

  signUp(type: string) {
    this.user.next({ type });
  }

  getUser(): Observable<{ type: string } | null> {
    return this.user.asObservable();
  }
}
