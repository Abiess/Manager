import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';


@Component({
  selector: 'app-qrcode',
   template: '<canvas></canvas>'
})

export class QrcodeComponent implements OnInit {
  @Input()
  value!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.generateQRCode();
  }

  generateQRCode() {
    QRCode.toCanvas(this.elementRef.nativeElement.querySelector('canvas'), this.value, (error: any) => {
      if (error) {
        console.error('Error generating QR code:', error);
      }
    });
  }
}
