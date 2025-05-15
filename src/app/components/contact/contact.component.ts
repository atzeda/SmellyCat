import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAILJS_CONFIG } from '../../../emailjs.config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: [''],
      postalCode: [''],
      address: [''],
      message: ['']
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID, {
      title: EMAILJS_CONFIG.EMAIL_TITLE,
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      time: new Date().toLocaleString(),
      city: this.contactForm.value.city,
      postal: this.contactForm.value.postalCode,
      address: this.contactForm.value.address,
      message: this.contactForm.value.message,
    },
      EMAILJS_CONFIG.PUBLIC_KEY
    ).then(() => {
      alert('Message sent successfully!');
      this.contactForm.reset();
    }).catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    });
  }
}
