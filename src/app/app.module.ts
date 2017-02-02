import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './Intro.component';

import { TitleModule } from './title/title.module';
import { AppRoutingModule } from './app-routing,module';
import { SideModule } from './side/side.module';
import { HelloModule } from './hello/hello.module';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TitleModule.forRoot({userName : 'Happy'}),
    AppRoutingModule,
    SideModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
