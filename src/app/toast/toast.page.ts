import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage {

  constructor(public toastController: ToastController) {}

  async toast1() {
    const toast = await this.toastController.create({      
      position: 'top',
      message: 'A Moldávia tem o romeno como língua oficial, mas o russo é falado por boa parte das pessoas, além de se ver o alfabeto cirílico pra todo lado.',
      duration: 10000
    });
    toast.present();
  }

  async toast2() {
    const toast = await this.toastController.create({      
      position: 'top',
      message: 'Existe um número bastante significativo de imagens de Jesus crucificado pela região, além da quantidade de estátuas e motivos religiosos o tamanho das obras também impressiona.',
      duration: 10000
    });
    toast.present();
  }

  async toast3() {
    const toast = await this.toastController.create({      
      position: 'top',
      message: 'O país não é banhado por nenhum mar mas possui um enorme número de poços d´agua, quase toda cidade tem o seu e os moradores fazem uso da água retirada de lá.',
      duration: 10000
    });
    toast.present();
  }


  async toastWithOptions() {

    const toast = await this.toastController.create({
      header: 'Pronto!',
      message: 'Operação concluída',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark',
          text: 'Concluído',
          handler: () => {
            console.log('Conclude clicked');
          }
        }, {
          text: 'Fechar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
