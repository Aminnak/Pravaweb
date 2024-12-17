import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule , FormBuilder ,FormGroup , Validators} from "@angular/forms";
@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    Form : FormGroup;
    tempFormError :Boolean = false
    constructor(private formBuilder : FormBuilder){
        this.Form = this.formBuilder.group({
            username : ['',[Validators.required]],
            password : ['',[Validators.required]],
            confirmPassword : ['',[Validators.required]],
            postalCode : [''],
            email : ['',[Validators.required]],
            phoneNumber : ['']
        })
    }
}
