import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', level: 90, icon: '../../../assets/images/html-5.png' },
    { name: 'CSS', level: 90, icon: '../../../assets/images/css-3.png' },
    { name: 'JavaScript', level: 90, icon: '../../../assets/images/js.png' },
    { name: 'Angular', level: 70, icon: '../../../assets/images/angular.png' },
    { name: 'BootStrap', level: 85, icon: '../../../assets/images/bootstrap.png' },
    { name: 'Tailwind', level: 80, icon: '../../../assets/images/tailwind.png' },
    { name: 'React', level: 75, icon: '../../../assets/images/react.png' },
    { name: 'SQL', level: 80, icon: '../../../assets/images/sql.png' },
  ];
}
