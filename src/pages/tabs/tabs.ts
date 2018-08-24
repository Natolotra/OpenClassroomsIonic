import { Component } from "@angular/core";
import { BookListPage } from "../booklist/booklist";
import { CdListPage } from "../cdlist/cdlist";

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage{
    bookListPage = BookListPage;
    cdListPage = CdListPage;

    constructor(){}
}