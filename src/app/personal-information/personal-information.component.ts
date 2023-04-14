import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Deepak Thakur'],
    ['DOB', '10/06/1972'],
    ['Work Exp', '1 Years'],
    ['Education', 'BCA (2021)'],
    ['Interests', 'Football'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1 years of experience in software industry.',
    'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as CEO of Google Alphabet',
  ];

  constructor() {}

  ngOnInit(): void {}

}
