import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import { MatButtonModule, MatCardModule, MatInputModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog, EditContactDialog } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';
import { ContactsService } from "./contacts.service";

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [	
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialog,
    EditContactDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialog, EditContactDialog]
})
export class AppModule { }
