import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fingerprintText = '';
  fingerprintAvailable = false;
  authText = '';

  constructor(public navCtrl: NavController,
              public platform: Platform,
              public fingerprint: FingerprintAIO) {
    platform.ready().then( () => {
      fingerprint.isAvailable().then((text) => {
        this.fingerprintText = text;
        this.fingerprintAvailable = true;
      }, (error) => {
        this.fingerprintText = error;
        this.fingerprintAvailable = false;
      })
    })
  }

  public auth(){
    this.fingerprint.show({clientId: 'test', clientSecret: 'test-secret'}).then((auth) => {
      this.authText = auth;
    }, (error) => {
      this.authText = error;
    })
  }


}
