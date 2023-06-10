class Phonebook{
    private contacts:{name:string;phoneNumber:string}[];
    constructor(){
    this.contacts=[];
}
// !METHOD 1
// !METHOD 1
// !METHOD 1 addContact

addContact(name:string,phoneNumber:string):void{
    const newContact={name,phoneNumber};
    this.contacts.push(newContact);
}
// *METHOD 2
// *METHOD 2
// *METHOD 2 FIND BY NAME


findContactByName(name: string): string | null {
    const foundContact = this.contacts.find(
      (contact) => contact.name === name
    );
    return foundContact ? foundContact.phoneNumber : null;
  }
  // todo METHOD 3
// todo METHOD 3
// todo METHOD 3 FIND BY PHONENUM
  findContactByPhoneNumber(phoneNumber: string): string | null {
    const foundContact = this.contacts.find(
      (contact) => contact.phoneNumber === phoneNumber
    );
    return foundContact ? foundContact.name : null;
  }
//   ?METHOD 4 DELETE
//   ?METHOD 4 DELETE
//   ?METHOD 4 DELETE

  deleteContact(name: string): void {
    this.contacts = this.contacts.filter((contact) => contact.name !== name);
  }
}

const phonebook = new Phonebook();

phonebook.addContact("John Doe", "123456789");
phonebook.addContact("Jane Smith", "987654321");
phonebook.addContact("Mike Johnson", "555555555");

console.log(phonebook.findContactByName("John Doe")); 
console.log(phonebook.findContactByName("Jane Smith")); 
console.log(phonebook.findContactByName("Mike Johnson")); 

console.log(phonebook.findContactByPhoneNumber("123456789")); 
console.log(phonebook.findContactByPhoneNumber("987654321")); 
console.log(phonebook.findContactByPhoneNumber("555555555")); 

phonebook.deleteContact("Jane Smith");
console.log(phonebook.findContactByName("Jane Smith"));
phonebook.deleteContact("John Doe");
console.log(phonebook.findContactByPhoneNumber("123456789")); 