import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private isLogged = new BehaviorSubject<boolean>(true);

  get _isLogged(): boolean {
    return this.isLogged.value;
  }

  set(isLogged: boolean) {
    this.isLogged.next(isLogged);
  }
}
