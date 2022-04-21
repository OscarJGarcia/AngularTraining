import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() height: string = '50vh';
  @Input() width: string = '50vw';
  @Input() isOpened: boolean = true;
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.close.emit();
  }
}
