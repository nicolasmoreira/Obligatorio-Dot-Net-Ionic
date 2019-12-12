import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PedidosPendientesPage } from '../pages/pedidos-pendientes/pedidos-pendientes';
import { MisPedidosPage } from '../pages/mis-pedidos/mis-pedidos';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { DetallesDelPedido2Page } from '../pages/detalles-del-pedido2/detalles-del-pedido2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PedidosPendientesPage,
    MisPedidosPage,
    TabsControllerPage,
    LoginPage,
    DetallesDelPedido2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PedidosPendientesPage,
    MisPedidosPage,
    TabsControllerPage,
    LoginPage,
    DetallesDelPedido2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}