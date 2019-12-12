import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidosPendientesPage } from '../pedidos-pendientes/pedidos-pendientes';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToPedidosPendientes(params){
    if (!params) params = {};
    this.navCtrl.push(PedidosPendientesPage);
  }
}
