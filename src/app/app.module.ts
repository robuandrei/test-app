import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Test App module here
import { TestAppModule } from './modules/test-app/test-app/test-app.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
