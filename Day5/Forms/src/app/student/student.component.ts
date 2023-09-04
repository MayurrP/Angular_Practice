import { Component } from '@angular/core';
import { StudentDetails } from '../StudentDetail';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  public gender! : string[];

  public studentDetails! : StudentDetails;

  ngOnInit()
  {
    this.gender = ['Male','Female'];

    this.studentDetails = new StudentDetails({
      name : "", phoneNo : 0,
      gender : this.gender[0], terms : false
    });
  }

  submitDetails()
  {
    alert("Student Details Submitted");
    console.log("\nStudent Name : "+this.studentDetails.name
    +"\nPhone No : "+this.studentDetails.phoneNo
    +"\nGender : "+this.studentDetails.gender  );

    this.studentDetails.name = "";
    this.studentDetails.phoneNo = 0;
    this.studentDetails.gender = "";
    this.studentDetails.terms = false;

  }
}
