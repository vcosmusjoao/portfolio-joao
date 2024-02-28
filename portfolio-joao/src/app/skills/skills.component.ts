import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills:any =[
    { name: 'CSS' },
    { name: ' Html' },
    { name: '.NET' },
    { name: 'Spring Boot' },
    { name: 'Angular' },
    { name: 'SQL' },

  ]

}
