function AddressBook () {

  this.contacts=[];
  var self= this;


  AddressBook.prototype.addContact= function(newContact) {


    self.contacts.push(newContact);


  };

  AddressBook.prototype.getContact= function(value){


    return self.contacts[value];

  };


}