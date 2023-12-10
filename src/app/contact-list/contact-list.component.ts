import { Component } from '@angular/core';
import {Contact} from '../models/contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  isMarked = true;
  constructor() {
    this.setMarkContact();
    this.createContact();
    }
    isFriendContact = true;
    isFamilyContact = false;
    isWorkContact = true;
    markContact: Record<string, boolean> = {};
    setMarkContact(){
    this.markContact={
    friendContact : this.isFriendContact,
    familyContact: this.isFamilyContact,
    workContact: this.isWorkContact
    }
    }
    listContacts: Array<Contact> = new Array<Contact>();
  createContact() {
 let contact = new Contact(1,"Walid", "HAMMAMI", "walid.ham@hotmail.com","Friend", "Amis", "98559121");
  this.listContacts.push(contact);

  contact = new Contact(2,"salah", "HAMMAMI", "walid.ham@hotmail.com","Friend", "Amis", "98559121");
  this.listContacts.push(contact);
  contact = new Contact(3,"ahmed", "HAMMAMI", "walid.ham@hotmail.com","Friend", "Amis", "98559121");
  this.listContacts.push(contact);
  contact = new Contact(4,"abdel aziz", "HAMMAMI", "walid.ham@hotmail.com","Friend", "Amis", "98559121");
  this.listContacts.push(contact);
}

deleteContact(id: number): void {
  const index: number = this.listContacts.findIndex(contact => contact.id === id);

  if (index !== -1) {
    this.listContacts.splice(index, 1);
  } else {
    console.warn(`Contact with id ${id} not found.`);
  }
}

         
   
}
