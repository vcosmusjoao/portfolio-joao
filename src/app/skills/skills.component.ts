import { Component, OnInit } from '@angular/core';
import { skill } from '../shared/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skills: skill[]=[];

  ngOnInit(): void {
    this.skills = [
    { name: 'CSS' },
    { name: ' Html' },
    { name: '.NET' },
    { name: 'Spring Boot' },
    { name: 'Angular' },
    { name: 'UI Design' },
    ]
  }

}
