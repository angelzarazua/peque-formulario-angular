import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  pokemons : any = []
  listFormGroup : FormGroup

  constructor(
    private alert: AlertController,
    private router: Router,
    private api : ApiService,
    private formBuilder:FormBuilder
    ){
      this.api.getAll().subscribe(Response =>{
        console.log(Response);
        this.pokemons = Response;
      }, error =>{
        console.log(error);
      })
  }

  ngOnInit(){
    this.listFormGroup = this.formBuilder.group({
      'name' : ['', Validators.required]
    });

  }

  async click() {
    console.log('Click Man!');

    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }


  goUrl():void{
    this.router.navigateByUrl('/perfil');
  }

}
