import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../../../providers/storage/storage';
import { ListaPage } from '../lista/lista';


@IonicPage()
@Component({
  selector: 'page-subprodutos',
  templateUrl: 'subprodutos.html',
})
export class SubprodutosPage {

  constructor(
    public navCtrl: NavController,
    public storage: StorageProvider, 
    public navParams: NavParams) {
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

  pequisa(){
    this.navCtrl.push(ListaPage)
  }

}
