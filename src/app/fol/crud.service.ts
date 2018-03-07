import { Injectable } from '@angular/core';
import { Crud } from './crud';

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class CrudService {

  crudList : AngularFireList<any>;
  currDetail : Crud = new Crud();

  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.crudList = this.firebase.list('crudDetails');
    return this.crudList;
  }

  insertEmployee(crd : Crud){
    this.crudList.push({
      name : crd.name,
      seat : crd.seat,
      clas : crd.clas,
      year : crd.year,
    });

  }

}
