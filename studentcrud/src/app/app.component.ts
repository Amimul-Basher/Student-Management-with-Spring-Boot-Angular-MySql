import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentcrud';
  bindingStudent = {
    id:"",
    name:"",
    department:"",
    email:"",
  };
  isEdit!: boolean;
  constructor(private studentService: StudentService){}
  
  addStudent(userForm: NgForm){
    console.log(userForm.value);
    let formStudent = userForm.value;
    this.studentService.addStudent(formStudent).subscribe(response=>{
      console.log("User Added Sucessfully");
      userForm.form.reset();
      this.studentService.informChild();
    }
      // data=> console.log('sucess',data),
      // error=> console.error('error!', error) ,
      
    );
  }

  receiveStudent(student: any){
    console.log(student);
    console.log("received");
    this.bindingStudent = Object.assign({}, student);  //this will take the updating student and assign it
    //console.log(this.bindingStudent);
    this.isEdit = true;
  }
  updateStudent(userForm: NgForm){
    this.studentService.updateStudent(this.bindingStudent).subscribe(()=>{
      console.log("user Updated");
      this.studentService.informChild();
      this.isEdit = false;
      userForm.form.reset();
    });
    console.log(userForm.value);
    console.log("done");
    
  }

}
