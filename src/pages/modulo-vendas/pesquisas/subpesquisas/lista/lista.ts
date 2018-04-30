import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PesquisaPage } from './pesquisa/pesquisa'

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquisasPage');
  }

  linkar(){
    this.navCtrl.push(PesquisaPage)
  }

  items: any[];

  initializeItems() {
    this.items = [{
      "numero": "377799"
    }]
  } 


  e(item) {
    console.log(item)
  }


  getItems(ev: any) {

    this.initializeItems();


    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((items) => {
        if (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.cnpj.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }
        if (items.codigoCliente.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          return (items.codigoCliente.toLowerCase().indexOf(val.toLowerCase()) > -1);
        }

      })

    }
  }

}
