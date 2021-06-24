import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Student } from '../model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-detailstudent',
  templateUrl: './detailstudent.component.html',
  styleUrls: ['./detailstudent.component.css']
})
export class DetailstudentComponent implements OnInit {
  allStudents: Student[]= [];
  student:any;
  page: number = 1;
  @Output() sendToParent = new EventEmitter();  //Decorator declaration for sending information from parent to child

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.userAdded.subscribe(response=>{
      console.log("User Added From Parent Component");
      this.getStudents();
      
    })
    this.getStudents();
  }
  getStudents(){

    this.studentService.getStudents().subscribe(
      response=>{
        console.log(response);
        this.allStudents = response;
      }
    );

  }

  updateStudent(uStudent: any){
    this.sendToParent.emit(uStudent);
    //console.log(uStudent);
  }

  deleteStudent(dStudent: any){
    console.log(dStudent);
    this.studentService.deleteStudent(dStudent).subscribe(res=>{
      this.getStudents(); // whenever the deletion completes the parent section will get called immidiately
    }  
    );
  }

}
