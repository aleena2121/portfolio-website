import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async send() {
    if (this.contactForm.valid) {
      try {
        const response = await emailjs.send(
          'service_8s0duom', 
          'template_j7rubbd', 
          {
            from_name: this.contactForm.value.name,
            from_email: this.contactForm.value.email,
            subject: this.contactForm.value.subject,
            message: this.contactForm.value.message
          },
          'MQWgddwRuD2Ag3JSU' // Replace with your EmailJS public key
        );
        alert('This message has been sent');
        this.contactForm.reset();
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      }
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
