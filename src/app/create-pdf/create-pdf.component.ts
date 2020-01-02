import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {
  constructor() { }
  // @ts-ignore
  @ViewChild('content') content: ElementRef;
  ngOnInit() {
  }


  makePdf() {
    const randomText = Math.random().toString(36).substring(7);
    const doc = new jsPDF();
    // tslint:disable-next-line:only-arrow-functions
    doc.addHTML(this.content.nativeElement, function() {
      doc.save(randomText + '.pdf');
    });
  }

}
