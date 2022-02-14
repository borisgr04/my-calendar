import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(private injector:Injector) {}
  ngDoBootstrap() {
    customElements.define(
      'my-calendar',
      createCustomElement(AppComponent, {injector: this.injector})
    )
  }
}
