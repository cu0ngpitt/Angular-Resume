import { Component, OnInit } from '@angular/core';

import { Skills } from '../../models/skills';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[];
  tools: Skills[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void{
    this.skillsService.getSkills()
      .subscribe((skills: any) => {
        this.skills = skills.skillsData;
        this.tools = skills.tools;
      )};
  }

}
