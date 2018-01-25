import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
public nome_usuario: String = "Pedro luis do codigo";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumero(num1:number,num2:number): void{
    alert(num1 + num2);
  }
  
  ionViewDidLoad() {
    //this.somaDoisNumero(10,  99);
  }

}
