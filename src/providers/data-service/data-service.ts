import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  db;

  constructor(public http: Http, public afdb: AngularFireDatabase) {
    this.db = afdb.object('/');
  }

  makeRice(cups) {
    this.db.update({ numcups: cups });
  }

}
