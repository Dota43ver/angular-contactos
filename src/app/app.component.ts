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
  contactos: any;

  constructor(public fb: FormBuilder, public estadosServices: EstadosService, public contactoServices: ContactoService, public paisesServices: PaisesService) {

  }
  ngOnInit(): void {
    this.personaForm = this.fb.group({
      id: [''],  
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      pais: ['', Validators.required],
      estado: ['', Validators.required],
      numero: ['', Validators.required],
    });

    this.paisesServices.getAllPaises().subscribe(resp => {
      this.paises = resp;
    }, error => {
      console.error(error);
    });

    this.contactoServices.getAllContactos().subscribe(resp => {
      this.contactos = resp;
    }, error => {
      console.error(error);
    });

    this.personaForm.get('pais')?.valueChanges.subscribe(value => {
      
      this.personaForm?.get('estado')?.reset();
      this.estados = []; 

      this.estadosServices.cargarEstados(value.id).subscribe(resp => {
        this.estados = resp;
      }, error => {
        console.error(error);
      });
    });
  }

  guardar(): void {
    this.contactoServices.saveContacto(this.personaForm?.value).subscribe(resp => {
      
      this.personaForm!.reset();
  
      
      this.contactoServices.getAllContactos().subscribe(updatedContacts => {
        this.contactos = updatedContacts;
      }, error => {
        console.error('Error al recargar los contactos:', error);
      });
    }, error => {
      console.error('Error al guardar el contacto:', error);
    });
  }

  eliminar(contacto:any){
    this.contactoServices.deleteContacto(contacto.id).subscribe(resp=>{
      
      this.contactos.pop(contacto)
      // if(resp === true){
      // }
    },
    error=>{
      console.error(error);
    })
  }

  editar(contacto:any){
  this.personaForm!.setValue({
    id: contacto.id,
    nombre: contacto.nombre,
    apellido: contacto.apellido,
    edad: contacto.edad,
    pais: contacto.pais,
    estado: contacto.estado,
    numero: contacto.numero,
  })
  }

  
}
