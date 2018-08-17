import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {UserloginProvider} from '../../providers/userlogin/userlogin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData:any;
  public userdetails: any;
  userData = {"EmailAddress":"","Password":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,private Userlogin:UserloginProvider,private alertCtrl: AlertController,private storage:Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //Api Connection
    this.Userlogin.postData(this.userData,"logisticslogin").then((result)=>{
      this.responseData=result;
      console.log(this.responseData);
      if(this.responseData.status=="1"){
        this.storage.set('Userdata',this.responseData);
        this.navCtrl.push('WelcomePage',{
          udata:this.responseData
        });
      }
      else{
        this.msgAlert(this.responseData.message);
      }
          },(err)=>{
      //connection fail message

    });
  }
  msgAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Notification',
      message:msg,
      buttons: ['Close']
    });
    alert.present();
  }
  forgot(){

    this.Userlogin.getData(this.userData, "logisticsforgotpassword/"+this.userData.EmailAddress+"/").then((result) => {
      this.responseData = result;
      this.msgAlert(this.responseData.message);
      console.log(this.responseData);
    }, (err) => {
      //connection fail message

    });
  }

}
