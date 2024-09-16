import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  isVisible = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { 
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

  users = [
    { id: 1, 
      firstName: 'John', 
      lastName: 'Doe',
      birthDay: '2012-12-12' ,
      gender: 'Mele',
      email: 'john.doe@example.com', 
      phoneNumber: '0912345566',
      role: 'Developer' },
      { id: 2, 
        firstName: 'John', 
        lastName: 'Doe',
        birthDay: '2012-12-12' ,
        gender: 'Mele',
        email: 'john.doe@example.com', 
        phoneNumber: '0912345566',
        role: 'Developer' },
  ];
  ngOnInit(): void {
    this.getDataFromAPI();
  }
  getDataFromAPI(): void {
      const apiUrl = 'http://localhost:5245/api/User'; // ใส่ URL ของ API

      this.http.get(apiUrl).subscribe({
        next: (response) => {
          console.log('response', response); // แสดงผล API response ใน console
        },
        error: (err) => {
          console.error('Error occurred while fetching data:', err);
        }
      });
  }
  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  }
