import { Component, OnInit } from '@angular/core';

declare var emailjs: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  submitted = false;

  ngOnInit() {
  }

  onSubmit(contactform) {
    const service_id = 'mailgun',
          template_id = 'mailgun',
          template_params = {
              name: contactform.value.name,
              email: contactform.value.email,
              message: contactform.value.message
              };

    emailjs.send(service_id, template_id, template_params);

    this.submitted = true;
    contactform.reset();
  }
}
