import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  

  educationList: Education[] =[
    {
      institute: 'AISECT University',
      course: 'Master of Computer Applications',
      duration: '2021-2023',
      score: '7.39 CGPA',
    },
    {
      institute: 'AISECT University',
      course: 'Bachelor of Computer Applications',
      duration: '2018-2021',
      score: '7.66 CGPA',
    },
    {
      institute: 'Jharkhand Commerce Inter College',
      course: 'Senior Secondary-Class XII',
      duration: '2016-2018',
      score: '50.6%',
    },
    {
      institute: 'Saraswati V N Resi High School',
      course: 'Higher Secondary-Class ',
      duration: '2014-2015',
      score: '58.4%',
    }
  ];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
