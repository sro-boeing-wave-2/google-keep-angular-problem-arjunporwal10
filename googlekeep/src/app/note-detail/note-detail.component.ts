import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../notes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { NoteService } from '../note.service';
import { element } from 'protractor';
import { not } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {


  ngOnInit() {
    this.getNote();
  }
  NoteEditForm = this.fb.group({
    NotesId: [''],
    Title: [''],
    Text: [''],
    IsPinned: [''],
    CheckLists: this.fb.array([]),
    Labels: this.fb.array([])
  });
  NoteToDisplay: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    private fb: FormBuilder

  ) { }

  getNote(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => {
        this.NoteToDisplay = note;
    });
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(this.NoteEditForm.value as Note);

    console.log(this.NoteToDisplay);
    this.noteService.updateNote(this.NoteEditForm.value, id)
      .subscribe(() => this.goBack());
  }
  get Labels() {
    return this.NoteEditForm.get('Labels') as FormArray;
  }
  addLabel() {
    this.Labels.push(this.fb.group({
      labelName: ['']
    }));
  }
  get CheckLists() {
    return this.NoteEditForm.get('CheckLists') as FormArray;
  }
  addCheckList() {
    this.CheckLists.push(this.fb.group({
      ChecklistData: [''],
      IsChecked: ['']
    }));
  }


}
