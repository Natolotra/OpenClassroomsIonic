import { Component, OnInit } from "@angular/core";
import { Book } from "../../../models/book";
import { NavParams, ViewController } from "ionic-angular";
import { BookService } from "../../../services/book.service";

@Component({
    selector: 'page-lend-book',
    templateUrl: 'lendbook.html'
})
export class LendBookPage implements OnInit{
    index: number;
    book: Book;
    constructor(private navParams: NavParams, private bookService: BookService,
        public viewCtrl: ViewController){
    }

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.book = this.bookService.books[this.index];
    }

    onToggleAppareil() {
        this.book.isLend = !this.book.isLend;
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }
}