import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { EdwardComponent } from './edward/edward.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    EdwardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'crisis-list',
        component: CrisisListComponent
      },
      {
        path: 'heroes-list',
        component: HeroesListComponent
      },
      {
        path: 'edward',
        component: EdwardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
