import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { YoutubeService } from './youtube.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchItemComponent } from './search/item/search-item.component';
import { SearchBarComponent } from './search/bar/search-bar.component';
import { TrendsItemComponent } from './trends/item/trends-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavlinkComponent } from './navbar/nav-link.component';


@NgModule({ 
  declarations: [
    AppComponent,
    SearchComponent,
    SearchBarComponent,
    SearchItemComponent,
    TrendsItemComponent,
    NavbarComponent,
    NavlinkComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
