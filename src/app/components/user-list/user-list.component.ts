import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from "../registration-form/registration-form.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RegistrationFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @ViewChild(RegistrationFormComponent) modal!: RegistrationFormComponent;

  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      birthDay: '2012-12-12',
      gender: 'Mele',
      email: 'john.doe@example.com',
      phoneNumber: '0912345566',
      role: 'Developer'
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      birthDay: '2012-12-12',
      gender: 'Mele',
      email: 'john.doe@example.com',
      phoneNumber: '0912345566',
      role: 'Developer'
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      birthDay: '2012-12-12',
      gender: 'Mele',
      email: 'john.doe@example.com',
      phoneNumber: '0912345566',
      role: 'Developer'
    },
  ];
  constructor(private http: HttpClient) { }

  openModal() {
    this.modal.open();
  }
}
