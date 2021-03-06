import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Compus2Page } from '../compus2/compus2';

/**
 * Generated class for the CompuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compu',
  templateUrl: 'compu.html',
})
export class CompuPage {
  compus = [];
  compusPage = Compus2Page;

  constructor(public navCtrl: NavController, public http : HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data => {
     // console.log(JSON.stringify(data));
     if(data.hasOwnProperty('counter_map')){
      console.log(data.counter_map.all);
    }
    if(data.hasOwnProperty('list_ads')){
      this.compus = data.list_ads;
    }
 
    }, error =>{
      console.log(JSON.stringify(error));
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompuPage');
  }
  verCompu(compu)
  {
    this.navCtrl.push(this.compusPage, {compu: compu});
  }
}
  

 


