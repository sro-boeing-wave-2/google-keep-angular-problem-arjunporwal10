import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule } from '@angular/forms';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { NoteSearchComponent } from './note-search/note-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NoteSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
