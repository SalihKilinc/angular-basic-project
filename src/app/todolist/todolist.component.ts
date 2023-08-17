import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskArray = [{taskName: "Brush teeth", isCompleted: false}];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls["task"].value,
      isCompleted: false
    });
    form.reset(); // Formu sıfırla
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1); // Belirtilen indeksteki görevi siler
  }
}
