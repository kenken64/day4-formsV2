import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NoteService } from '../services/note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  constructor(private noteSvc: NoteService) { }

  ngOnInit() { }

  addMyThought(form: NgForm) {
    console.log('form: ', form.value);
    this.noteSvc
      .addNote(form.value)
      .subscribe((result)=>{
        console.log(result);
      });
    form.resetForm();
  }

  checkEmailFromUS(value) {
    return false;
  }

}
