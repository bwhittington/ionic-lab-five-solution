import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BooksComponent } from '../books/book-list/book-list';
import { BookDetailsComponent } from '../books/book-details/book-details'
import { AddBookComponent } from './add-book/add-book';

@NgModule({
	declarations: [BooksComponent, BookDetailsComponent, AddBookComponent],
	imports: [IonicModule],
	exports: [BooksComponent, BookDetailsComponent, AddBookComponent]
})
export class BooksModule {}
