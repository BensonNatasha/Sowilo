import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { 
    
  }

  async showMessage(message: string){
    const toast = await this.toastCtrl.create({message, duration: 3000});
    toast.present();
  }
}
