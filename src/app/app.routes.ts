import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

export const routes: Routes = [
    {
        path: 'registration',
        component: RegistrationFormComponent,  // ใช้คอมโพเนนต์นี้โดยตรง
      },
];
