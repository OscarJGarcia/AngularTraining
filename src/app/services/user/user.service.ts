import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private existingNames: string[] = ['Oscar', 'Javier', 'Andres', 'Rodrigo'];

  fakeHttp(value: string) {
    return of(this.existingNames.includes(value)).pipe(delay(1000));
  }
}
