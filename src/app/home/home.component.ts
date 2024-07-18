import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: any = [];

  constructor() {
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage['items']);
    }
  }

  addItemForm: FormGroup = new FormGroup({
    item: new FormControl(''),
  });

  addItem(form: FormGroup) {
    let item = form.controls['item'].value;
    this.items.push(item);
    localStorage.setItem('items', JSON.stringify(this.items));
    form.reset();
  }

  deleteItem(item: string) {
    let elementPosition = JSON.parse(localStorage['items']).indexOf(item);
    console.log(elementPosition);
    this.items.splice(elementPosition, 1);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  deleteAllTasks() {
    localStorage.removeItem('items');
    this.items = [];
  }
}
