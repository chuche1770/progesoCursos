import { Component, VERSION } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  curso: string = '';
  profesor: string = '';
  plataforma: string = '';
  chekP: number = 0;
  toDo: boolean;

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

  addCourse() {
    let newCourse: Course = {
      name: this.curso,
      professor: this.profesor,
      platform: this.plataforma,
      chekPointClass: this.chekP,
      toDoToday: false,
    };
    this.courses.push(newCourse);

    this.profesor = '';
    this.curso = '';
    this.plataforma = '';
    this.chekP = 0;
    this.toDo = false;
    // alert(this.newCourse.name);
  }

  deleteCourse(index: number) {
    this.courses.splice(index, 1);
  }
}
