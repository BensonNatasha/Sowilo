import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from './../service/auth.service';
import { ToastService } from './../shared/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private toast: ToastService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  navigate() {
    this.router.navigate(['/menu'])
  }


  ngOnInit() {
  }

  async login() {
    await this.presentLoading();

    try {
      await this.authService.login(this.userLogin)
    } catch (error) {
      this.toast.showMessage(error.message);
    } finally {
      this.loading.dismiss();
      /*   this.toast.showMessage('Login efetuado com sucesso!!!');   */
      this.navigate();
    }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

}