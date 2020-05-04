import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BannerComponent } from './shared/banner/banner.component';
import { ListComponent } from './shared/list/list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TitleComponent } from './shared/title/title.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


var firebaseConfig = {
  apiKey: "AIzaSyAAV_L_aedj-15VfUEQRZa7s5zvaoqhXKc",
  authDomain: "netflix-40a5e.firebaseapp.com",
  databaseURL: "https://netflix-40a5e.firebaseio.com",
  projectId: "netflix-40a5e",
  storageBucket: "netflix-40a5e.appspot.com",
  messagingSenderId: "9902124042",
  appId: "1:9902124042:web:259b9786c3f365f77343f3"
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ListComponent,
    FooterComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
