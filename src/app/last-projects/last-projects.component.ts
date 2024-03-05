import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../service/portfolio.service';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent implements OnInit{
  lastProjects: any[] = [];
  constructor(private portfolioService: PortfolioService){}
  ngOnInit(){
    this.portfolioService.getUltimosProjetos().subscribe((data: any[]) =>{
      this.lastProjects = data;
      console.log(this.lastProjects);
    });
  }




  
}
