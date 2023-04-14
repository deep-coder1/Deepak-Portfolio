import { Component, OnInit } from '@angular/core';
import { Education, WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExpList: WorkExperience[] = [
    {
      role: 'Trainee Developer',
      company: 'Puratech Consultancy Solutions Pvt. Ltd.',
      duration: 'Aug 2022 - Nov 2022',
      description: [
        'Learn the Cor PHP and Cake PHP Framework as per project requirement.',
        'Worked on Core PHP and Cake PHP MVC Architecture projects as per assigned task.'
      ]
    },
    {
      role: 'Trainee Developer',
      company: 'Puratech Consultancy Solutions Pvt. Ltd.',
      duration: 'Aug 2022 - Nov 2022',
      description: [
        'Learn the Cor PHP and Cake PHP Framework as per project requirement.',
        'Worked on Core PHP and Cake PHP MVC Architecture projects as per assigned task.'
      ]
    },
    {
      role: 'Trainee Developer',
      company: 'Puratech Consultancy Solutions Pvt. Ltd.',
      duration: 'Aug 2022 - Nov 2022',
      description: [
        'Learn the Cor PHP and Cake PHP Framework as per project requirement.',
        'Worked on Core PHP and Cake PHP MVC Architecture projects as per assigned task.'
      ]
    }
  ]

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
