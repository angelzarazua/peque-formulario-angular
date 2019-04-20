import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { setDefaultService } from 'selenium-webdriver/edge';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  formPerfil: FormGroup;
  exprRegEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formPerfil=this.formBuilder.group({
      'name':['', Validators.required],
      'email' : ['', Validators.compose([Validators.required, Validators.pattern(this.exprRegEmail)])],
      //'email':['', Validators.required],
      'age':['', Validators.required]
    });
  }

  regresar():void{
    this.location.back();
  }

  guardar():void{
    console.log(this.formPerfil.value);
  }

}
