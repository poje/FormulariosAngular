import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  constructor(private fb: FormBuilder)  {}

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre:'RTX 4080ti',
        precio: 1600
      })
  }
  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('RTX 4080 TI'),
  //   'precio': new FormControl('0'),
  //   'existencias': new FormControl('5')
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]], //Valor, Validacion Sincrona, Validación Asincrona
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  })

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
