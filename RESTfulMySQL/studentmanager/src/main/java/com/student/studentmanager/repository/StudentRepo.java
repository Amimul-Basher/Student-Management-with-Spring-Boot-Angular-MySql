package com.student.studentmanager.repository;
import com.student.studentmanager.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepo extends JpaRepository<Student , Integer> {

    Optional<Student> findByName(String name);
    List<Student> findAllByDepartment(String department);
    List<Student> findAllByOrderByIdDesc();

    void deleteStudentById(int id);
    Optional<Student> findStudentById(int id);


}