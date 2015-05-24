describe ('Address Book', function(){

  var addressBook,
      newContact;


  beforeEach(function() {

    addressBook= new AddressBook();
    newContact= new Contact({
      name: "John",
      telephone: 45637,
      address: "Louisville"
    });

  });

  it('Should be able to add a Contact', function(){

    addressBook.addContact(newContact);

    expect(addressBook.getContact(0)).toBe(newContact);
    expect(newContact.name).not.toBeUndefined();
    expect(newContact.name).toEqual("John");
    expect(newContact.address).toMatch(/Louisville/);
    expect(newContact.address).not.toMatch(/Tac/);


  });

  it('Should be able to delete a contact', function() {

    addressBook.addContact(newContact);
    addressBook.deleteContact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();

  });

});

describe('Async Address Book', function() {

  var addressBook= new AddressBook();

  beforeEach(function(done) {

    addressBook.getInitialContacts(function() {
      done();

    });
  });

  it('Should grab initial contacts', function(done) {

    expect(addressBook.initialComplete).toBe(true);
    done();
  });

});