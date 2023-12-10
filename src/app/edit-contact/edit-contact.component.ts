import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editContactForm: FormGroup | undefined; 

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.editContactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.email],
      description: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  onCancel() {
    this.router.navigate(['/contact-list']);
  }
}
