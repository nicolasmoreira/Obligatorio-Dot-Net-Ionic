import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pedidos-pendientes',
  templateUrl: 'pedidos-pendientes.html'
})
export class PedidosPendientesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
