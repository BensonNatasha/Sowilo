import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { ToastService } from '../shared/toast.service';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss'],
})
export class RegistryPage implements OnInit {

  constructor(
    private authService: AuthService,
    private toast: ToastService,
    private loadingCtrl: LoadingController
  ) { }

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  ngOnInit() {
  }

  async register() {
    await this.presentLoading();

    try {
      await this.authService.register(this.userRegister)
    } catch (error) {
      this.toast.showMessage(error.message);
    } finally {
      this.loading.dismiss();
     /*  this.toast.showMessage('Cadastro realizado com sucesso'); */
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  
  messageError(error: any){
    let mensagem = '';
    if (error.code == 'auth/email-already-in-use') {
      mensagem = 'O e-mail informado já está sendo usado.';
    } else if (error.code == 'auth/invalid-email') {
      mensagem = 'O e-mail informado é inválido';
    } else if (error.code == 'auth/user-not-found' || error.code == 'auth/invalid-password') {
      mensagem = 'O usuário/senha inválido(s)';
    } else {
      mensagem = error;
      this.toast.showMessage(mensagem);

    }

    this.toast.showMessage(mensagem);
  }

}