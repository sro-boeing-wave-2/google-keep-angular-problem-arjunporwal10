import { Component, OnInit } from '@angular/core';
import{Note} from '../notes';
import{NotesArray} from '../mock-notes';
import{NoteService} from '../note.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notesArray :Note[];

  NotePostForm = this.fb.group({
    NotesId: [''],
    Title: [''],
    Text: [''],
    IsPinned: [''],
    CheckLists: this.fb.array([]),
    Labels: this.fb.array([])
  });

  get Labels() {
    return this.NotePostForm.get('Labels') as FormArray;
  }
  addLabel() {
    this.Labels.push(this.fb.group({
      labelName: ['']
    }));
  }
  get CheckLists() {
    return this.NotePostForm.get('CheckLists') as FormArray;
  }
  addCheckList() {
    this.CheckLists.push(this.fb.group({
      ChecklistData: [''],
      IsChecked: ['']
    }));
  }

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    private fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
     this.noteService.getNotes()
     .subscribe(notes => this.notesArray = notes);
  }
  add(NoteToPost:Note): void {
    this.noteService.addNote(NoteToPost)
      .subscribe(note => {
        this.notesArray.push(note);
        this.router.navigate(['']);
      });
  }
  delete(id: string): void {
    //const id = this.route.snapshot.paramMap.get('id');
    //this.notesArray = this.notesArray.filter(n => n !== note);
    this.noteService.deleteNote(id).subscribe();
  }

  post():void{
    this.add(this.NotePostForm.value);
  }

}
