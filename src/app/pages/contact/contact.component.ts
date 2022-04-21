import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';
import { ICONS } from 'src/app/shared/constants/icon-constans';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  icons: any = ICONS;
  contactForm: FormGroup;
  services: { id: number; name: string }[] = [
    { id: 1, name: 'Web Design' },
    { id: 2, name: 'Web Development' },
    { id: 3, name: 'Logo Design' },
    { id: 4, name: 'Other' },
  ];
  isServiceAdded: boolean = false;
  constructor(private messageService: MessagesService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [Validators.required]),
      message: new FormControl('', Validators.required),
      services: new FormArray([]),
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (!this.contactForm.invalid) {
      let messageTemp = this.contactForm.getRawValue();
      let message: Message = new Message(
        messageTemp.name,
        messageTemp.email,
        messageTemp.phonenumber,
        messageTemp.message,
        messageTemp.services
      );
      this.messageService.addMessage(message);

      console.log(message);
    }
  }
  onChangeService(service: any) {
    const services = this.servicesForm.controls;
    if (services.length > 0) {
      let serviceTemp = services.find((x) => x.value.id === service.id);
      if (serviceTemp) {
        this.servicesForm.removeAt(services.indexOf(serviceTemp));
      } else {
        this.addService(service);
      }
    } else {
      this.addService(service);
    }
    this.isServiceAdded = true;
  }
  addService(service: any) {
    (<FormArray>this.contactForm.get('services')).push(
      new FormGroup({
        id: new FormControl(service.id),
        name: new FormControl(service.name),
      })
    );
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phonenumber');
  }
  get message() {
    return this.contactForm.get('message');
  }

  get servicesForm() {
    return <FormArray>this.contactForm.get('services');
  }
  onDeleteMessages() {
    this.messageService.deleteMessages();
  }
}
