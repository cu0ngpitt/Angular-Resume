import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Observable } from 'rxjs/Observable';
//import { catchError, map } from 'rxjs/operators';

//import { Skills } from '../models/skills';

@Injectable()
export class SkillsService {

  private skillsUrl = './assets/skills.json';

  constructor(private http: HttpClient) { }

  // Get skills from mock server
  getSkills() {
    return this.http.get(this.skillsUrl);
  }

}
