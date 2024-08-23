import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstadosService } from './services/estados/estados.service';
import { ContactoService } from './services/contacto/contacto.service';
import { PaisesService } from './services/paises/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  personaForm: FormGroup | undefined;

  paises: any;
  estados: any;

  constructor(public fb: FormBuilder, public estadosServices: EstadosService, public contactoServices: ContactoService, public paisesServices: PaisesService) {

  }
  ngOnInit(): void {
    this.personaForm = this.fb.group({    
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      numero: ['', Validators.required],
    });

    this.paisesServices.getAllPaises().subscribe(resp=>{
      this.paises = resp;
      
    },
    error=>{
      console.error(error);
    })
  }

  guardar():void{

  }

  cargarEstados(event : any){

    this.estadosServices.cargarEstados(event.target.value).subscribe(resp=>{
      this.estados = resp;
    },
    error=>{
      console.error(error);
    })
  }
}
