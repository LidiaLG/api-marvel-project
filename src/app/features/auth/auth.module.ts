import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthPageComponent } from './auth-page/auth-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { InfoFormComponent } from './info-form/info-form.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AuthPageComponent,
    LoginFormComponent,
    InfoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AuthModule { }
