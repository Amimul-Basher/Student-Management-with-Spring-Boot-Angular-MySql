import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  //student!: Student;
  userAdded = new Subject();

  public addStudent(formStudent: Student):Observable<Student> {
    console.log(formStudent);
    return this.http.post<Student>(`${this.apiServerUrl}/student/add`, formStudent) //url and student passed to add
  }


  public getStudents():Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`) //url used as rest api
  }

  public updateStudent(student: Student):Observable<Student> {
    return this.http.put<Student>(`${this.apiServerUrl}/student/update`, student) //url and student passed to add
  }

  public deleteStudent(student: any):Observable<Student> {
    
    return this.http.delete<Student>(`${this.apiServerUrl}/student/delete/${student.id}`) //url and student passed to add
  }

  informChild(){
    this.userAdded.next();
  }

}
