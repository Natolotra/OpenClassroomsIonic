import { Component } from "@angular/core";
import { MenuController, ModalController } from "ionic-angular";
import { BookService } from "../../services/book.service";
import { Book } from "../../models/book";
import { LendBookPage } from "./lendbook/lendbook";

@Component({
    selector: 'page-book-list',
    templateUrl: 'booklist.html'
})
export class BookListPage{
    books: Book[];
    constructor(private menuCtrl: MenuController, private bookService: BookService,
        private modalCtrl: ModalController){}

    onLoadBook(index: number){
        let modal = this.modalCtrl.create(LendBookPage, {index: index});
        modal.present();
    }
    
    onToogleMenu(){
        this.menuCtrl.open();
    }

    ionViewWillEnter(){
        this.books = this.bookService.books.slice();
    }
}