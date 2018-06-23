import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Education } from '../models/education';

@Injectable()
export class EducationService {
  private edsUrl = './assets/education.json';

  constructor(private http: HttpClient) { }

  getEds() {
    return this.http.get(this.edsUrl);
  }

}
