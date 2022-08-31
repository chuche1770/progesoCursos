import { Component, VERSION } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses: Course[] = [
    {
      name: 'Curso de Fundamentos de Angular',
      professor: 'Nicolas Molina',
      platform: 'Platzi',
      chekPointClass: 14,
      toDoToday: false,
    },
    {
      name: 'Aprende a crear aplicaciones para iOS y Android con Ionic 4',
      professor: 'Oscar Morral',
      platform: 'Udemy',
      chekPointClass: 6,
      toDoToday: false,
    },
    {
      name: 'Curso Profesional de Git y GitHub',
      professor: 'Freddy Vega',
      platform: 'Platzi',
      chekPointClass: 4,
      toDoToday: false,
    },
  ];
}
