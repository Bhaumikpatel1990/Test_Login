import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  userdetails:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
   // const data= JSON.parse(localStorage.getItem('Userdata'));
   // this.userdetails=data.Userdata;
   // console.log(this.userdetails);
    //this.storage.get('Userdata').then((val)=>{
    //  console.log(val);
    //  this.userdetails = val;
    //  console.log(this.userdetails);
    //  console.log(this.userdetails.userID);
    //});
    
    this.userdetails=this.navParams.get('udata');
    console.log(this.userdetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
