import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MedicalInstitutionsComponent } from './medical-institutions/medical-institutions.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import {FormsModule} from "@angular/forms";
import { SelectComponent } from './select/select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MedicalInstitutionsComponent,
    HeaderComponent,
    ButtonComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}