import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { HelloComponent } from "./hello/hello.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ] /* llamo a los componentes que quiero render */,
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
