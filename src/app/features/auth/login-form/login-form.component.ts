import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  private fb = inject( FormBuilder );

  public authForm: FormGroup = this.fb.group({
    public_key: [ '', Validators.required ],
    private_key: [ '', Validators.required ]
  })

}
