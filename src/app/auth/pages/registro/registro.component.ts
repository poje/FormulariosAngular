import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { ValidatorService } from '../../../shared/Validators/validator.service'
import { EmailValidatorService } from '../../../shared/Validators/email-validator.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  //Temporal

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService,
  ) {}

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    },
  )

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'jorge villaseca',
      email: 'test@test.cl',
      username: 'jorge',
    })
  }

  get emailErrorMsg() {
    // return "Hola Mundo";
    const errors = this.miFormulario.get('email')?.errors

    if (errors?.['required']) {
      return 'Email es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El valor no tiene formato de correo electronico'
    } else if (errors?.['emailTomado']) {
      return 'El email ya esta siendo usado'
    }

    return ''
  }

  // emailRequired() {
  //   return this.miFormulario.get('email')?.errors?.['required'] &&
  //     this.miFormulario.get('email')?.touched;
  // }

  // emailFormato() {
  //   return this.miFormulario.get('email')?.errors?.['pattern'] &&
  //     this.miFormulario.get('email')?.touched;
  // }

  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.['emailTomado'] &&
  //     this.miFormulario.get('email')?.touched;
  // }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    )
  }

  submitFormulario() {
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched()
  }
}
