import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Core PHP, Cake PHP',
      level: 'Intermediate',
      rating: 65,
    },
    {
      name: 'HTML, CSS, JS, React',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'MySQL,',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'Java, Python',
      level: 'Intermediate',
      rating: 70,
    },
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
