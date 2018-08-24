import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/booklist/booklist';
import { LendBookPage } from '../pages/booklist/lendbook/lendbook';
import { CdListPage } from '../pages/cdlist/cdlist';
import { LendCdPage } from '../pages/cdlist/lendcd/lendcd';
import { SettingsPage } from '../pages/settings/settings';
import { BookService } from '../services/book.service';
import { CDService } from '../services/cd.Service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BookService,
    CDService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
