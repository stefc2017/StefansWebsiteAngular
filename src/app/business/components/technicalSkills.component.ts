import { Component } from '@angular/core';
import { EducationService } from '../services/education.service';
import { Education } from '../../data_model/education';
import { TechnicalSkill } from '../../data_model/technicalSkill';
import { TechnicalSkillService } from '../services/technicalSkill.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-technicalSkills',
  templateUrl: '../../presentation/html/technicalSkills.component.html',
  styleUrls: ['../../presentation/css/technicalSkills.component.css']
})
export class TechnicalSkillsComponent {
  languages: TechnicalSkill[];
  frameworks: TechnicalSkill[];
  operatingSystems: TechnicalSkill[];
  software: TechnicalSkill[];
  errMessage: string;

  constructor(private technicalSkillService: TechnicalSkillService){}

  ngOnInit(){
    this.getTechnicalSkillsByLanguage();
    this.getTechnicalSkillsByFramework();
    this.getTechnicalSkillsByOperatingSystem();
    this.getTechnicalSkillsBySoftware();
  }

  getTechnicalSkillsByLanguage(){
    this.technicalSkillService.getTechnicalSkillsByLanguage()
    .subscribe(
      res => this.languages = res,
      err => this.errMessage = err
    );
  }//end getTechnicalSkillsByLanguage

  getTechnicalSkillsByFramework(){
    this.technicalSkillService.getTechnicalSkillsByFramework()
    .subscribe(
      res => this.frameworks = res,
      err => this.errMessage = err
    );
  }//end getTechnicalSkillsByFramework

  getTechnicalSkillsByOperatingSystem(){
    this.technicalSkillService.getTechnicalSkillsByOperatingSystem()
    .subscribe(
      res => this.operatingSystems = res,
      err => this.errMessage = err
    );
  }//end getTechnicalSkillsByOperatingSystem

  getTechnicalSkillsBySoftware(){
    this.technicalSkillService.getTechnicalSkillsBySoftware()
    .subscribe(
      res => this.software = res,
      err => this.errMessage = err
    );
  }//end getTechnicalSkillsBySoftware

  setProgressBarColor(proficiencyLevel){
    var progressBarColor;

    if(proficiencyLevel >= 70){
      progressBarColor = "progress-bar-success";
    }
    else if(proficiencyLevel >= 50 && proficiencyLevel < 70){
      progressBarColor = "progress-bar-info";
    }
    else{ //proficiencyLevel <= 49
      progressBarColor = "progress-bar-warning";
    }

    return progressBarColor;
  }
  

  
}
