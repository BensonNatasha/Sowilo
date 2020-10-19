
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from './../service/auth.service';
import { ToastService } from './../shared/toast.service';;


@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

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
  async resetpassword() {
    await this.presentLoading();

    try {
      await this.authService.resetPassword(this.userLogin);
      this.toast.showMessage('Login efetuado com sucesso');
    } catch (error) {
      this.messageError(error);
    } finally {
      this.loading.dismiss();
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

