import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sel-period',
  templateUrl: './sel-period.component.html',
  styleUrls: ['./sel-period.component.css']
})
export class SelPeriodComponent implements OnInit {
  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
       period: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(this.forma.valid);
    if (this.forma.valid) {
      console.log(this.forma.value);
      return;
    }
    alert('error');
  }
}
