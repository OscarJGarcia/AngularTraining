import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { atcb_action, atcb_init } from 'add-to-calendar-button';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  public initValue: any = {
    "name": "Add the title of your event",
    "description": "A nice description does not hurt",
    "startDate": "2022-02-21",
    "endDate": "2022-03-24",
    "startTime": "10:13",
    "endTime": "17:57",
    "location": "Somewhere over the rainbow",
    "label": "Add to Calendar",
    "options": [
      "Apple",
      "Google",
      "iCal",
      "Microsoft365",
      "Outlook.com",
      "Yahoo"
    ],
    "timeZone": "Europe/Berlin",
    "iCalFileName": "Reminder-Event"
  }
  constructor() { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    atcb_init();
  }

  public addAction() {
    atcb_init();
  }
}
