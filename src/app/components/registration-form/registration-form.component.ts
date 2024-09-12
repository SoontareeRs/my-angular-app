import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  standalone: true,  // ระบุว่าคอมโพเนนต์นี้เป็นแบบ stand-alone
  imports: [CommonModule, ReactiveFormsModule] // Import ReactiveFormsModule ที่นี่  // import โมดูลที่จำเป็นโดยตรง
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      birthDay: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      role: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
