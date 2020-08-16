import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, QuicklinkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
