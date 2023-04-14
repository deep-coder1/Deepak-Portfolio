import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Travel & Tour',
      technologies: '- HTML, CSS, Vanilla JavaScript, PHP, MySQL Database e',
      description: ['Responsive Travel & Tour/ / travel booking / adventure tour multipage website both front and backend where users can book trip and see services, packages pag'],
    },
    {
      title: 'Dental Care',
      technologies: 'HTML, CSS, Vanilla, JavaScript, Bootstrap, PHP, MySQL Database etc.',
      description: ['Responsive single page dental appointment website both front and backend where users can appointment and see services, work process, clients reviews etc.'],
    },
    {
      title: 'Personal Portfolio',
      technologies: 'HTML, CSS, Vanilla JavaScript, PHP, MySQL database etc.',
      description: ['Responsive personal portfolio website where users can contact and send me message.'],
    },
    {
      title: 'Institute Website',
      technologies: 'HTML, CSS, JavaScript, JQuery, PHP, MySQL, phpMyAdmin.',
      description: ['The main objective of this project is to design a dynamic, responsive Website on “Learn Online from Home”: using new trending technologies in market maximum functionalities, efficiency, maximum optimal speed on web and one key feature it must be more informative. '],
    },
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
