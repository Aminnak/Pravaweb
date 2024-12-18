import { AbstractControl, ValidationErrors } from "@angular/forms";

export function lowercaseValidator(control:AbstractControl):ValidationErrors | null{
    const value = control.value || ''
    return /[a-z]/.test(value) ? null : {lowercaseValidator : 'should at least contains one lowercase char'}
}

export function uppercaseValidator(control:AbstractControl) : ValidationErrors | null {
    const value = control.value || ''
    return /[A-Z]/.test(value) ? null : {uppercaseValidator : 'should at least contains one uppercase char'}
}
