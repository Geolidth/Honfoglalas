import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { CharPageComponent } from './char-page/char-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KaraktergenComponent } from './karaktergen/karaktergen.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { InputabilitiesComponent } from './inputabilities/inputabilities.component';

@NgModule({
  declarations: [
    AppComponent,
    CharPageComponent,
    NavbarComponent,
    KaraktergenComponent,
    HomeComponent,
    SkillsComponent,
    InputabilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
