import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'edit-contact', component: EditContactComponent },
  { path: 'add-contact', component: AddContactComponent },
  
  { path: '',component: ContactListComponent  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
