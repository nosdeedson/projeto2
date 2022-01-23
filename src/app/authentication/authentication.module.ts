import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../components/template/template.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignComponent } from './sign/sign.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    ForgotPasswordComponent,
    SignComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
