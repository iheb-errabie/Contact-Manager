import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Output() deleteEvent = new EventEmitter<number>();
  @Input() contact!: Contact;
  @Input() i: number = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const contactId = +params['id'];
     
    });
  }

  deleteContact(): void {
    let response = confirm("Voulez-vous supprimer le contact");
    if (response) {
      this.deleteEvent.emit(this.contact.id);
    }
  }

  editContact(): void {
    this.router.navigate(['./edit-contact']);
  }
}
