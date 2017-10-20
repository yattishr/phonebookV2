import { Component, Inject, OnInit } from '@angular/core';
import { ContactsService } from "../contacts.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  constructor(
    private contactsService: ContactsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts().slice(0,3);
  }
  
  add() {
    let dialogRef = this.dialog.open(AddContactDialog);

    dialogRef.afterClosed().subscribe(contact => {
      if(contact) {
        this.contacts.push(contact);
      }
    });
  }

  delete(contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    console.log("Deleting contact: " + contact);
  }

  edit(contact) {
    let dialogRef = this.dialog.open(EditContactDialog, {
      data: {name: contact.name, number: contact.number}
    });

    dialogRef.afterClosed().subscribe(contact => {
      if(contact) {
        this.contacts.push(contact);
      }
    });

    console.log("Editing contact: " + contact);
    console.log("Index of entry is: " + this.contacts.indexOf(contact));
    console.log("Name passed is: " + contact.name);
    console.log("Number passed is: " + contact.number);

    // delete contact
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    console.log("Deleting contact: " + contact); 
  }
}

  @Component({
    selector: 'add-contact-dialog',
    templateUrl: './add.contacts.html'
  })

  export class AddContactDialog {
    constructor(
      public dialogRef: MatDialogRef<AddContactDialog>
    ) {}
  }

  @Component({
    selector: 'edit-contact-dialog',
    templateUrl: './edit.contacts.html'
  })

  export class EditContactDialog {
    // constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
    constructor(
      public dialogRef: MatDialogRef<EditContactDialog>
    ) {}    
  }

  // export class EditContactDialog {
  //   constructor(@Inject(MAT_DIALOG_DATA)
  //     public dialogRef: MatDialogRef<EditContactDialog>
  //     // public data: any
  //     // constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  //   ) {}
  // }