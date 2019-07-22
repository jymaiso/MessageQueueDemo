import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublisherComponent } from './publisher/publisher.component';
import { SubscriberComponent } from './subscriber/subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    PublisherComponent,
    SubscriberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
