import { Component } from '@angular/core';
import { EducationService } from '../services/education.service';
import { Education } from '../../data_model/education';

@Component({
  selector: 'app-education',
  templateUrl: '../../presentation/html/education.component.html',
  styleUrls: ['../../presentation/css/education.component.css']
})
export class EducationComponent {
  myEducation: Education[];
  errMessage: string;

  constructor(private educationService: EducationService){}

  ngOnInit(){
    this.getAllMyEducation();
  }

  getAllMyEducation(){
    this.educationService.getAllMyEducation()
    .subscribe(
      res => this.myEducation = res,
      err => this.errMessage = err
    );
  }//end getAllMyEducation

  
}
