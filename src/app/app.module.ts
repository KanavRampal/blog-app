import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';
import { BlogServiceService } from './blog-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouritesComponent,
    AboutComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
