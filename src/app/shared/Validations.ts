import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function lowercaseValidator(control:AbstractControl):ValidationErrors | null{
    const value = control.value || ''
    return /[a-z]/.test(value) ? null : {lowercaseValidator : 'should at least contains one lowercase char'}
}

export function uppercaseValidator(control:AbstractControl) : ValidationErrors | null {
    const value = control.value || ''
    return /[A-Z]/.test(value) ? null : {uppercaseValidator : 'should at least contains one uppercase char'}
}


export function passValidator(control : AbstractControl) : ValidationErrors | null {
    const value = control.value || ''
    return /^(?=(.*[!@?%#$^]))(?=(.*\d.*.\d.))(?=(.*[A-Z]))[A-Za-z\d@!?%#$^]*$/.test(value) ? null : { passwordValidator : 'Please enter a strong '}
}

export function passMatch() : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null  => {
        const Password = control.get('password')?.value
        const ConfirmPassword = control.get('confirmPassword')?.value
        return Password === ConfirmPassword ? null : {passError : 'Password and Confirm Password didnt matched'}
    }
}
