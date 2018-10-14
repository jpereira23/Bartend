import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BotRegistration } from '../botRegistration/botRegistration';
@Component({
  selector: 'pairingMenu',
  templateUrl: 'pairingMenu.html'
})

export class PairingMenu{
  private scanSub: any;
  callback: any;
  constructor(public navCtrl: NavController, private navParams: NavParams, private qrScanner: QRScanner, private modalController: ModalController, private toastCtrl: ToastController){
    this.callback = this.navParams.get("callback");
  }

  ionViewWillEnter(){
    this.showCamera();
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if(status.authorized){
        console.log('Camera Permission Given');

        this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
          //console.log('Scanned something', text);
          this.presentToast(text);
          this.callback(text).then(() => { this.navCtrl.pop() });
        });

        this.qrScanner.show();

      } else if(status.denied){
        console.log('Camera permission denied');
      } else {
        console.log('Permission denied for this runtime');
      }
    }).catch((e: any) => console.log('Error is', e));
  }


  scanOnClick(){
    let modal = this.modalController.create('ScanQrPage');
    modal.present();
  }

  presentToast(text: string){
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });


    toast.present();
    /*
    this.navCtrl.push(BotRegistration, {
      idCode: text
    });
    */
  }

  ionViewWillLeave(){
    this.qrScanner.hide();
    this.scanSub.unsubscribe();
    this.hideCamera();
  }

  showCamera(){
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera(){
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }
}
