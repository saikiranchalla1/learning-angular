import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) { // if passing the element ref this will be of the type ElementRef
    console.log('submitted');
    console.log(form);


  }

  // onSubmit() {
  //   console.log(this.signUpForm);
  // }
}
