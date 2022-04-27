import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messagesChanged = new Subject<Array<Message>>();
  private messages: Array<Message> = [
    new Message(
      'Oscar',
      'oscargarcia801@email.com',
      2323232,
      'Este es un mensaje',
      [
        {
          id: '1',
          name: 'Web Design',
        },
      ]
    ),
  ];

  constructor() {}

  addMessage(message: Message) {
    this.messages.push(message);
    this.messagesChanged.next(this.messages.slice());
  }

  setMessages(messages: Array<Message>) {
    this.messages = messages;
    this.messagesChanged.next(this.messages.slice());
  }
  deleteMessages() {
    this.messages = [];
    this.messagesChanged.next([]);
  }

  get mesg() {
    return this.messages.slice();
  }

  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Are you sure?');

    return of(confirmation);
  }
}
