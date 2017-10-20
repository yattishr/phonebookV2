import { Injectable } from '@angular/core';
interface IContact {
  name: string;
  number: string;
}


@Injectable()
export class ContactsService {

  constructor() { }
  getContacts() {
    let contacts: IContact[] = [
    {
      name: 'Yattish',
      number: '27117441916'
    },
    {
      name: 'Katherine Zeta Jones',
      number: '27117441218'
    },
    {
      name: 'Kate Middleton',
      number: '27117541318'
    },
    {
      name: 'Jasmin Jane',
      number: '27217571818'
    }        

    ];
    return contacts;
  }
}