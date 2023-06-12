import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      mail: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  get f() {
    return this.registrationForm.controls;
  };

  registerUser(): void {
    if (this.registrationForm.invalid) {
      return;
    }

    const user = {
      nombre: this.f["nombre"].value,
      apellido: this.f["apellido"].value,
      dni: this.f["dni"].value,
      mail: this.f["mail"].value,
      telefono: this.f["telefono"].value
    };

    localStorage.setItem('user', JSON.stringify(user));
    console.log(user)
    alert('Usuario registrado:');
  }
 

  
}
