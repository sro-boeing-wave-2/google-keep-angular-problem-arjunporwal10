import { Component, OnInit } from '@angular/core';
import {Note} from '../notes';
import{NoteService} from '../note.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notesArray: Note[] = [];
  note:Note;

  constructor(private noteService: NoteService,
    private router:Router) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notesArray = notes);
  }
  delete(id: string): void {
    //const id = this.route.snapshot.paramMap.get('id');
    //this.notesArray = this.notesArray.filter(n => n !== note);
    this.noteService.deleteNote(id).subscribe(() => this.ngOnInit());
  }

}
