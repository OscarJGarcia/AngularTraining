import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Message } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';
import { ICONS } from 'src/app/shared/constants/icon-constants';
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

  @ViewChild('nameInput') nameInput!: ElementRef;

  constructor(
    private messageService: MessagesService,
    private userService: UserService
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required], [this.validName()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phonenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        this.controlValueisNumber(),
      ]),
      message: new FormControl('', [
        Validators.required,
        this.controlValueMaxLength(255),
      ]),
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
  private controlValueisNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const numbersOnly = /[^0-9/]*/g;
      const valueOfControl = control.value;
      const valueValid = valueOfControl.replace(numbersOnly, '');
      if (valueValid == valueOfControl) {
        return null;
      } else {
        return { valueIsNotNumber: true };
      }
    };
  }

  private controlValueMaxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valueOfControl = control.value;
      if (valueOfControl.length <= maxLength) {
        return null;
      } else {
        return { errorMaxLength: true };
      }
    };
  }

  validName(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userService.fakeHttp(control.value).pipe(
        map((result: boolean) => {
          return result ? { invalidName: true } : null;
        })
      );
    };
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.contactForm.invalid) {
      return this.messageService.confirm('Discard changes for Person?');
    }
    return true;
  }
}
