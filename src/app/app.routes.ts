import { Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationFormComponent,
  },
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: '**',
    component: UserListComponent,
  },
];
