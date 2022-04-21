export class Message {
  name: string;
  email: string;
  phone: number;
  message: string;
  services: { id: string; name: string }[];
  constructor(
    name: string,
    email: string,
    phone: number,
    message: string,
    services: { id: string; name: string }[]
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
    this.services = services;
  }
}
