import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  public authForm!: FormGroup;
  private fb = inject( FormBuilder );
  private authService = inject( AuthService );
  private router = inject( Router );

  ngOnInit(): void {
    this.authForm = this.fb.group({
      public_key: ['', Validators.required],
      private_key: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const public_key: string | null = this.authForm.value.public_key;
    const private_key: string | null = this.authForm.value.private_key;
    if( public_key && private_key ) {
      const hash = this.authService.generateHash( private_key, public_key);
      this.authService.setHash( 'marvelHash', hash );
      this.authService.setPublicKey( public_key );
      console.log('todo ok', hash);
      
    }else {
      console.error('No se ha ingresado la clave');
      
    }
  }
}
