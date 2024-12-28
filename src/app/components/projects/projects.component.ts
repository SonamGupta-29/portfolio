import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  currentIndex = 0;

  projects = [
    {
      name: 'E-commerce Website',
      description: 'A full-fledged e-commerce platform built with React, Node.js, and MongoDB. Features include product filtering, secure checkout, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'CSS'],
      github: 'https://github.com/sonamgupta/ecommerce',
      liveLink: 'https://ecommerce-demo.com',
      image: 'assets/images/ecommerce.jpg'
    },
    {
      name: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular and Tailwind CSS to showcase my skills, projects, and achievements.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/sonamgupta/portfolio',
      liveLink: 'https://sonamgupta.dev',
      image: 'assets/images/portfolio.jpg'
    },
    {
      name: 'Task Management App',
      description: 'A task management application that allows users to create, manage, and track their daily tasks. Built with React and Firebase.',
      technologies: ['React', 'Firebase', 'CSS'],
      github: 'https://github.com/sonamgupta/task-manager',
      liveLink: 'https://task-manager-app.com',
      image: 'assets/images/task-manager.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  nextSlide(): void {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarouselPosition();
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1;
    }
    this.updateCarouselPosition();
  }

  updateCarouselPosition(): void {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const offset = -this.currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }
}
