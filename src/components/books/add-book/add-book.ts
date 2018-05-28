import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book, fakeBookList } from '../shared/book.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'add-book',
  templateUrl: 'add-book.html'
})
export class AddBookComponent {
  addBookForm: FormGroup

  constructor(private builder: FormBuilder, private storage: Storage) {
    this.createForm();
  }

  createForm(){
    this.addBookForm = this.builder.group({
      'title': ['', Validators.required ],
      'description': ['', Validators.required ],
      'backgroundImage': ['', Validators.required ]
    })
  }

  saveUser() {
    if (this.addBookForm.dirty && this.addBookForm.valid) {
      const book = {
        title: this.addBookForm.value.title,
        description: this.addBookForm.value.description,
        backgroundImage: this.addBookForm.value.backgroundImage
      }
      this.storage.set(book.title, book);
      alert(`Title: ${this.addBookForm.value.title} Description: ${this.addBookForm.value.description}`);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
