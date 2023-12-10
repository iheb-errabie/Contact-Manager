import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MiniComponent } from './mini/mini.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    RootComponent,
    ContactListComponent,
    MiniComponent,
    ContactItemComponent,
    AddContactComponent,
    PageNotFoundComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
