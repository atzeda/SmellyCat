import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
      'service_g5j0moc',
      'template_dnufduu',
      {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        city: this.contactForm.value.city,
        postal: this.contactForm.value.postalCode,
        address: this.contactForm.value.address,
        message: this.contactForm.value.message,
      },
      'OdTnhN4ud0YDPaZRs'
    )
    .then(() => {
      alert('Message sent successfully!');
      this.contactForm.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    });
  }
}
