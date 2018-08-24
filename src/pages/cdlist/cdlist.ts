import { Component } from "@angular/core";
import { MenuController, ModalController } from "ionic-angular";
import { CDService } from "../../services/cd.Service";
import { CD } from "../../models/cd";
import { LendCdPage } from "./lendcd/lendcd";

@Component({
    selector: 'page-cd-list',
    templateUrl: 'cdlist.html'
})
export class CdListPage{
    cds: CD[];
    constructor(private menuCtrl: MenuController, private cdService: CDService,
        private modalCtrl: ModalController){}

    onLoadCD(index: number){
        let modal = this.modalCtrl.create(LendCdPage, {index: index});
        modal.present();
    }

    onToogleMenu(){
        this.menuCtrl.open();
    }

    ionViewWillEnter(){
        this.cds = this.cdService.cds.slice();
    }
}