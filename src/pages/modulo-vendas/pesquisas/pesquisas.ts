import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubprodutosPage } from './subpesquisas/subprodutos/subprodutos';

@IonicPage()
@Component({
  selector: 'page-pesquisas',
  templateUrl: 'pesquisas.html',
})
export class PesquisasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisasPage');
  }

  linkar(){
    this.navCtrl.push(SubprodutosPage)
  }

}
