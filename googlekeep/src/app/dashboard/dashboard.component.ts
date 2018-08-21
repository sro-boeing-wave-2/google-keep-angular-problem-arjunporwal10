import { Component, OnInit } from '@angular/core';
import {Note} from '../notes';
import{NoteService} from '../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notesArray: Note[] = [];
  note:Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notesArray = notes);
  }

}
