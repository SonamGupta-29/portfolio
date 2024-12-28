import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hireMe() {
    alert('Thank you for showing interest! Contact me at sonamgupta.ui@gmail.com');
  }

  downloadResume() {
    const resumeUrl = '/assets/Resume/Sonam-Gupta-Resume.pdf'; // Path to your resume in the assets folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sonam_Gupta_Resume.pdf';
    link.click();
  }
}
