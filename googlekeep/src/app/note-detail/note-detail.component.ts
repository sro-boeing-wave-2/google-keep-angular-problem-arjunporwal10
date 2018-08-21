import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../notes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { NoteService } from '../note.service';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {


  NoteEditForm = this.fb.group({
    NoteId: [''],
    Title: [''],
    Text: [''],
    IsPinned: [''],
    CheckList: this.fb.array([]),
    Label: this.fb.array([])
  });
  NoteToDisplay: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    private fb: FormBuilder
  ) { }

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
    console.log(this.NoteEditForm.value);
    console.log(this.NoteToDisplay);
    this.noteService.updateNote(this.NoteToDisplay, id)
      .subscribe(() => this.goBack());
  }
  get Label() {
    return this.NoteEditForm.get('Label') as FormArray;
  }
  addLabel() {
    this.Label.push(this.fb.group({
      label: ['']
    }));
  }
  get CheckList() {
    return this.NoteEditForm.get('CheckList') as FormArray;
  }
  addCheckList() {
    this.CheckList.push(this.fb.group({
      Checklist: [''],
      IsChecked: ['']
    }));
  }


}
