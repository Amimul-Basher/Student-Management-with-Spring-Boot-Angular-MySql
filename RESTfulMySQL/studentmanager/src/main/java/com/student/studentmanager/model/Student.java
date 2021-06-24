package com.student.studentmanager.model;
import javax.persistence.*;
import java.io.Serializable;

//@Entity is used so that database can find the data table or model

@Entity
public class Student implements Serializable {

    //@Id is used to mentioning the primary key
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;
    private String name;
    private String department;
    private String email;

    //Now I know How painful not to declare a default constructor
    public Student() {

    }

    public Student(String name, String department, String email) {
        this.name = name;
        this.department = department;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
