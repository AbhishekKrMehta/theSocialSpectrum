import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule  } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { routing } from './app.routes';

// Services
import { AuthenticationService } from './services/authentication.service';
import { SignUpDetailsService } from "./services/sign-up-details.service";
import { AuthGuard } from "./services/auth.guard";
import { NewsService } from "./services/news.service";
import { ConfigurationService } from "./services/configuration.service";


// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AddLanguageComponent } from './footer/add-language/add-language.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './body/signIn/signIn.component';
import { HomeComponent } from './body/home/home.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { SignOutMsgComponent } from './body/sign-out-msg/sign-out-msg.component';
import { NewsComponent } from './body/news/news.component';

//pipes
import { SanitizePipe } from './pipes/sanitize.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AddLanguageComponent,
    HeaderComponent,
    SignInComponent,
    HomeComponent,
    InvalidUrlComponent,
    SignOutMsgComponent,
    SanitizePipe,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,HttpModule,
    AngularFireModule
  ],
  entryComponents: [
    AddLanguageComponent
  ],
  providers: [
    AuthenticationService,
    SignUpDetailsService,
    AuthGuard,
    NewsService,
    ConfigurationService
  
    
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
