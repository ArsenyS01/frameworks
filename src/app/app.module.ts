import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibComponent } from './lib/lib.component';
import { AddComponent } from './add/add.component';

import { DataService } from './data.service';

import {Routes, RouterModule} from '@angular/router';
 
const appRoutes: Routes =[
  { path: '', component: LibComponent},
  { path: 'add', component: AddComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LibComponent,
    AddComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
