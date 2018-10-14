import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';
import { Subscriber } from "rxjs/Subscriber";

@IonicPage()
@Component({
  selector: 'page-scan-qr',
  templateUrl: 'scan-qr.html'
})

export class ScanQrPage {
  private isBackMode: boolean = true;
  private isFlashLightOn: boolean = false;
  private scanSub: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController, public qrScanner: QRScanner, public toastCtrl: ToastController){

  }

  ionViewWillEnter(){
    this.showCamera();

    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if(status.authorized){
        console.log('Camera Permission Given');

        this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
          this.presentToast(text);
        });

        this.qrScanner.show();
      } else if(status.denied) {
        console.log('Camera permission denied');
      } else {
        console.log('Permission denied for this runtime');
      }
    }).catch((e: any) => console.log('Error is', e));
  }

  closeModal(){
    this.viewController.dismiss();
  }

  toggleFlashLight(){
    this.isFlashLightOn = !this.isFlashLightOn;
    if(this.isFlashLightOn){
      this.qrScanner.enableLight();
    }
    else{
      this.qrScanner.disableLight();
    }
  }

  toggleCamera(){
    this.isBackMode = !this.isBackMode;
    if(this.isBackMode){
      this.qrScanner.useFrontCamera();
    }
    else{
      this.qrScanner.useBackCamera();
    }
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
