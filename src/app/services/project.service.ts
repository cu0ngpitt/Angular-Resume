import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {
  private projectUrl = './assets/project.json'

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get(this.projectUrl);
  }

}
