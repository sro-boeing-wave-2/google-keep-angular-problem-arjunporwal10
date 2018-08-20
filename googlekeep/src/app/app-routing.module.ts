import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{NotesComponent} from './notes/notes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { NoteDetailComponent }  from './note-detail/note-detail.component';
import { notEqual } from 'assert';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: NoteDetailComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
