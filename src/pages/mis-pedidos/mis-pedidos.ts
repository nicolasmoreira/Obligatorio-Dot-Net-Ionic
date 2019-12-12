import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallesDelPedido2Page } from '../detalles-del-pedido2/detalles-del-pedido2';

@Component({
  selector: 'page-mis-pedidos',
  templateUrl: 'mis-pedidos.html'
})
export class MisPedidosPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToDetallesDelPedido2(params){
    if (!params) params = {};
    this.navCtrl.push(DetallesDelPedido2Page);
  }
}
