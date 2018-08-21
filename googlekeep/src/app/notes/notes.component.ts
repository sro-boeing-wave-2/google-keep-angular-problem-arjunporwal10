import { Component, OnInit } from '@angular/core';
import{Note} from '../notes';
import{NotesArray} from '../mock-notes';
import{NoteService} from '../note.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notesArray :Note[];

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
     this.noteService.getNotes()
     .subscribe(notes => this.notesArray = notes);
  }
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.noteService.addNote({

           notesId:5,
           Text: 'BlackCurrent',
           Title:title,
           IsPinned:false,
           Labels:[{LabelName:'label1',id:1},{LabelName:'label2',id:2}],
           CheckLists:[{CheckListData:'checklist1',id:1,IsChecked:true},{CheckListData:'checklist2',id:2,IsChecked:true}] }  as Note)
      .subscribe(note => {
        this.notesArray.push(note);
      });
  }
  delete(id: string): void {
    //const id = this.route.snapshot.paramMap.get('id');
    //this.notesArray = this.notesArray.filter(n => n !== note);
    this.noteService.deleteNote(id).subscribe();
  }


}
