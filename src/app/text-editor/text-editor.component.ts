import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  htmlContent: any = '';
  constructor() { }
  textEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '220px' ,
    width:  'auto' ,
    minWidth :  '0' ,
    translate :  'yes' ,
    enableToolbar : true,
    showToolbar : true,
    imageEndPoint  : '',
    placeholder :  'Enter text here…' ,
    toolbar : [
      ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
      ['fontName', 'fontSize', 'color'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
      ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
      ['link', 'unlink', 'image', 'video']
  ]
};

  ngOnInit() {
  }

}
