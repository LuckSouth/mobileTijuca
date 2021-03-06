import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { ScreenOrientation } from '@ionic-native/screen-orientation'; 

import { StorageProvider } from '../providers/storage/storage';  
import { Storage } from '@ionic/storage';    
import { LoginPage } from '../pages/login/login';
// import { ViagensPage } from '../pages/modulo-viagens/viagens/viagens';
import { PrincipalPage } from '../pages/principal/principal/principal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage: any = PrincipalPage; 
  storages: any; 

  constructor(
    platform: Platform,
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    //private screenOrientation: ScreenOrientation,
    public storageProvider: StorageProvider,
    public storage: Storage
  ) {


    platform.ready().then(() => {
   //   this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
   //   statusBar.styleDefault();
   //   splashScreen.hide(); 
    });

  }
}
