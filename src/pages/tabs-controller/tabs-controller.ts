import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MisPedidosPage } from '../mis-pedidos/mis-pedidos';
import { DetallesDelPedido2Page } from '../detalles-del-pedido2/detalles-del-pedido2';
import { LoginPage } from '../login/login';
import { PedidosPendientesPage } from '../pedidos-pendientes/pedidos-pendientes';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PedidosPendientesPage;
  tab2Root: any = MisPedidosPage;
  tab3Root: any = LoginPage;
  constructor(public navCtrl: NavController) {
  }
  goToMisPedidos(params){
    if (!params) params = {};
    this.navCtrl.push(MisPedidosPage);
  }goToDetallesDelPedido2(params){
    if (!params) params = {};
    this.navCtrl.push(DetallesDelPedido2Page);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToPedidosPendientes(params){
    if (!params) params = {};
    this.navCtrl.push(PedidosPendientesPage);
  }
}
