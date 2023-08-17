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
    { name: 'Java' },
    { name: 'C#' },
    { name: '.NET' },
    { name: 'Spring' },
  ]

}
