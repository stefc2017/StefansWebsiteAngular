import { Injectable, isDevMode } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Education } from '../../data_model/education';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class EducationService{
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

    getAllMyEducation(){
        this.url = this.host + "/education";
        return this.http.get<Education[]>(this.url);
    }

    
}
