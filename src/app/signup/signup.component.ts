import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    userForm: FormGroup;
    submitted = false;

    constructor(private frmbldr: FormBuilder, private router: Router) {
        this.createForm();
    }

  // tslint:disable-next-line:indent
	ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.userForm = this.frmbldr.group({
            userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            address: ['', Validators.required],

        }, {
            validator: CheckPasswordMatch('password', 'confirmPassword')

        });
    }

    get frm() {
        return this.userForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        } else {
			sessionStorage.clearItem();
			const userDetails = { user_name: this.userForm.value.email, password: this.userForm.value.password};
			sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
			this.router.navigate(['/login']);
			this.submitted = false;
			this.userForm.reset();
        }
    }

}

export function CheckPasswordMatch(pass: string, confirm_Pass: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[pass];
        const matchingControl = formGroup.controls[confirm_Pass];
        if (matchingControl.errors && !matchingControl.errors.CheckPasswordMatch) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
                CheckPasswordMatch: true
            });
        } else {
            matchingControl.setErrors(null);
        }
    };
}
