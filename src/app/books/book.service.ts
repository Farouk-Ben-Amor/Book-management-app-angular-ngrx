import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable,throwError,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book : Book) : Observable<Book>{

    //here to just testing the addActionFailure in the ngrx devtools
    const err = new Error('Error while adding a book')
    return throwError(()=>err)

    return of(book); 
  }
}
