import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

// Custom validator function
function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('password');

  if (password!.value !== confirmPassword!.value) {
    return { 'passwordMismatch': true };
  }

  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  imageProfile : string = ''
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.registrationForm = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, ],
      confirmPassword: ['', Validators.required],
    }, {
      validators: passwordMatchValidator, // Apply custom validator
    });
  }

  register() {
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;
      this.auth.register(
        registrationData.email,
        registrationData.password,
        registrationData.displayName,
        
      );
      this.registrationForm.reset();
    }
  }
}
