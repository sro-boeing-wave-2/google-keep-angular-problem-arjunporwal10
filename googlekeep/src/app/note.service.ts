import { Injectable } from '@angular/core';
import{Note} from './notes';
import{NotesArray} from './mock-notes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient,private messageService: MessageService) { }
  getNotes(): Observable<Note[]>  {
    return this.http.get<Note[]>(this.notesURL)
    .pipe(

      catchError(this.handleError('getNotes', []))
    );

  }
  getNote(id: string): Observable<Note> {
    const url = `${this.notesURL}/${id}`;
    return this.http.get<Note>(url).pipe(

    catchError(this.handleError<Note>(`getNote id=${id}`))
  );

  }
  /** Log a NoteService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`NoteService: ${message}`);
  }

  /** PUT: update the hero on the server */
  updateNote (note: Note, id:string): Observable<Note> {
    const url = `${this.notesURL}/${id}`;
  return this.http.put(url, note, httpOptions).pipe(

    catchError(this.handleError<any>('updateNote'))
  );
  }
  /** POST: add a new hero to the server */
  addNote (note: Note): Observable<Note> {
  return this.http.post<Note>(this.notesURL, note, httpOptions).pipe(

    catchError(this.handleError<Note>('addNote'))
  );
}
/** DELETE: delete the hero from the server */
  deleteNote (id:string): Observable<Note> {
  //const id = typeof note === 'string' ? note : note.id;
  const url = `${this.notesURL}/${id}`;

  return this.http.delete<Note>(url, httpOptions).pipe(

    catchError(this.handleError<Note>('deleteNote'))
  );
}
/* GET heroes whose name contains search term */
searchNotesByQuery(title:string): Observable<Note[]> {
  // if (!title.trim() ) {
  //   // if not search term, return empty hero array.
  //   return of([]);
  // }
  return this.http.get<Note[]>(`${this.notesURL}/query?title=${title}`).pipe(

    catchError(this.handleError<Note[]>('searchNotesByQuery', []))
  );
}


  private notesURL = 'https://localhost:44310/api/prototype';  // URL to web api


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
