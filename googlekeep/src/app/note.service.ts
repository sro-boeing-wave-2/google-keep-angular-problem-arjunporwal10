import { Injectable } from '@angular/core';
import{Note} from './notes';
import{NotesArray} from './mock-notes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private messageService: MessageService) { }
  getNotes(): Observable<Note[]>  {
    this.messageService.add('NoteService: fetched notes');
    return of(NotesArray) ;
  }
  getNote(id: number): Observable<Note> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`NoteService: fetched note id=${id}`);
    return of(NotesArray.find(hero => hero.id === id));
  }
}
