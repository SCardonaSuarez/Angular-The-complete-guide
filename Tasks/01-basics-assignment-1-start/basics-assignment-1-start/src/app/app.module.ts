import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyOtherComponentComponent } from './my-other-component/my-other-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyOtherComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
