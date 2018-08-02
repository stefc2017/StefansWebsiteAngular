import { Injectable, isDevMode } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TechnicalSkill } from '../../data_model/technicalSkill';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class TechnicalSkillService{
    private url:string;
    private host:string;

    constructor(public http: HttpClient){
        if(isDevMode()){
            this.host = "http://localhost:3000/api";
        }
        else{
            //add it later this.host = host;
        }
    }

    getTechnicalSkillsByLanguage(){
        this.url = this.host + "/technicalskills/language";
        return this.http.get<TechnicalSkill[]>(this.url);
    }

    getTechnicalSkillsByFramework(){
        this.url = this.host + "/technicalskills/framework";
        return this.http.get<TechnicalSkill[]>(this.url);
    }

    getTechnicalSkillsByOperatingSystem(){
        this.url = this.host + "/technicalskills/operatingSystem";
        return this.http.get<TechnicalSkill[]>(this.url);
    }

    getTechnicalSkillsBySoftware(){
        this.url = this.host + "/technicalskills/software";
        return this.http.get<TechnicalSkill[]>(this.url);
    }

    
}
