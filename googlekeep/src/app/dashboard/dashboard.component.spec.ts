import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatChipsModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatRadioModule,

} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import{NoteDetailComponent} from '../note-detail/note-detail.component';
import{NoteSearchComponent} from '../note-search/note-search.component';
import{NotesComponent} from '../notes/notes.component';
import {APP_BASE_HREF} from '@angular/common';
import { NgModule } from '@angular/core';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const routes: Routes = [
    { path: 'notes', component: NotesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: NoteDetailComponent }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotesComponent,
        DashboardComponent,
        NoteDetailComponent,
        NoteSearchComponent],
      imports:[RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatRadioModule,
        ReactiveFormsModule
        ] ,
        providers: [{provide: APP_BASE_HREF, useValue : '/' }] ,

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
