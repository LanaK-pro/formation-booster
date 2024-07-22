import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [NgFor],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegistrationFormComponent {
  //Pour importer les données de courses dans le courses component
  //coursesLists = new CoursesComponent(fetch).courses;
  onSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted');
    alert('Vous êtes inscrit!');
  }

  onButtonClick() {
    alert('Test alert!');
  }
}
