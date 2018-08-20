import { Component, OnInit } from '@angular/core';
import{Note} from '../notes';
import{NotesArray} from '../mock-notes';
import{NoteService} from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notesArray :Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
     this.noteService.getNotes()
     .subscribe(notes => this.notesArray = notes);

  }

}
