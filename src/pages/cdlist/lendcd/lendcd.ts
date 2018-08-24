import { Component, OnInit } from "@angular/core";
import { CD } from "../../../models/cd";
import { NavParams, ViewController } from "ionic-angular";
import { CDService } from "../../../services/cd.Service";

@Component({
    selector: 'page-lend-cd',
    templateUrl: 'lendcd.html'
})
export class LendCdPage implements OnInit{
    index: number;
    cd: CD;
    constructor(private navParams: NavParams, private cdService: CDService,
        private viewCtrl: ViewController){}

    ngOnInit() {
        this.index = this.navParams.get('index');
        this.cd = this.cdService.cds[this.index];
    }

    onToggleAppareil() {
        this.cd.isLend = !this.cd.isLend;
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }
}