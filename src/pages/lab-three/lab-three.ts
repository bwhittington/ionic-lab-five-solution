import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Book, fakeBookList } from '../../components/books/shared/book.model';
import { DetailsPage } from '../details/details';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LabThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'lab-three'
  }
)
@Component({
  selector: 'page-lab-three',
  templateUrl: 'lab-three.html',
})
export class LabThreePage {
  bookList:Array<Book> =  fakeBookList;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabThreePage');
    this.storage.get('test').then((val) => {
      let book : Book;
      if( val != null) {
        book = {
          id : 10,
          title : val.title,
          description : val.description,
          backgroundImage : val.backgroundImage
        }
        this.bookList.push( book )
      }
    });
  }

  viewDetails = function(bookId) {
    this.navCtrl.push(DetailsPage,  {
      bookId: bookId
    });
  };
}
