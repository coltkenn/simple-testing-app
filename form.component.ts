import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    let val = confirm('simple alert event');

    if(val) {
      alert('success!');
    } else {
      alert('failed!');
    }
  }

}
