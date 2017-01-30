import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {

  searchCriterias = {
    name: '', 
    crag: '',
    grade: 0,
    heart: false
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  toggle(event, button){
    console.log(button.id)
    
    this.searchCriterias.heart = !this.searchCriterias.heart;

    
  }

  search(){
    console.log("search!");
  }

}
