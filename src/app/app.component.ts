import { Component } from '@angular/core';
import { CrudService } from "./fol/crud.service";
import { NgForm } from "@angular/forms";
import { AngularFireList } from "angularfire2/database";
import { Crud } from "./fol/crud";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CrudService]
})
export class AppComponent  {
  title = 'Angular CRUD APPLICATION';
students = [
{name:"Arslan",seat:"EP-1449110",class:"BSCS",year:"4rth"},
{name:"Awais",seat:"EP-1449021",class:"BSCS",year:"4rth"},
{name:"Hamza",seat:"EP-1449032",class:"BSCS",year:"4rth"},
{name:"Hidayat",seat:"EP-1449037",class:"BSCS",year:"4rth"},
{name:"Shahrukh",seat:"EP-1449099",class:"BSCS",year:"4rth"},

];
constructor(private crudService : CrudService){}

ngOnInit(){
  this.crudService.getData();
}

onSubmit(form : NgForm){

  this.crudService.insertEmployee(form.value);
  
}
stud:any={};
stud1:any={};

addStudents(){
this.students.push(this.stud);
this.stud={};
}

deleteStudents(i){
  console.log(i);
  this.students.splice(i,1);
}
myVal;
editStudents(j){

  this.stud1.name = this.students[j].name;
  this.stud1.seat = this.students[j].seat;
  this.stud1.class = this.students[j].class;
  this.stud1.year = this.students[j].year;
  this.myVal = j;
}

updateStudents(i){
  let k = this.myVal;
  for(let i=0; i<this.students.length; i++)
  {
    if(i==k){
      this.students[i] = this.stud1;
      this.stud1 = {};
    }
  }
}

}
