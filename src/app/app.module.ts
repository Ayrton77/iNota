import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteFormPage } from '../pages/note-form/note-form';
import { NoteCardComponent } from '../components/note-card/note-card';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';
import { NoteProvider } from '../providers/note/note';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoteFormPage,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NoteFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteProvider
  ]
})
export class AppModule {}
