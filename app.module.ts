import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SasukeComponent } from './sasuke/sasuke.component';
import { narutoComponent } from './naruto/naruto.component';
import { AnimateService } from './Services/animate.service';

@NgModule({
  declarations: [
    AppComponent,
    SasukeComponent,
    narutoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AnimateService],
  bootstrap: [AppComponent]
})
export class AppModule { }