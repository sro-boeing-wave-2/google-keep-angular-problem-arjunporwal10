import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSearchComponent } from './note-search.component';
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
import{DashboardComponent} from '../dashboard/dashboard.component';
import{NotesComponent} from '../notes/notes.component';
import { NoteDetailComponent } from '../note-detail/note-detail.component';
import {APP_BASE_HREF} from '@angular/common';
import { NgModule } from '@angular/core';

describe('NoteSearchComponent', () => {
  let component: NoteSearchComponent;
  let fixture: ComponentFixture<NoteSearchComponent>;

  const routes: Routes = [
    { path: 'notes', component: NotesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: NoteDetailComponent }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteSearchComponent ,
        NotesComponent,
        DashboardComponent,
        NoteDetailComponent,
        ],
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
    fixture = TestBed.createComponent(NoteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
