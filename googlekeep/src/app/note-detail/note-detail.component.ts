import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../notes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteService }  from '../note.service';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

   NoteToDisplay: Note;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => this.NoteToDisplay = note);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.NoteToDisplay);
    this.noteService.updateNote(this.NoteToDisplay,id)
      .subscribe(() => this.goBack());
  }

}
