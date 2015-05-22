describe ('Address Book', function(){

  it('Should be able to add a Contact', function(){

    var addressBook= new AddressBook();
    this.newContact= new Contact({
      name: "John",
      telephone: 45637,
      address: "Louisville"
    });
    addressBook.addContact(this.newContact);

    expect(addressBook.getContact(0)).toBe(this.newContact);
    !expect(this.newContact.name).not.toBeUndefined();
    expect(this.newContact.name).toEqual("John");
    expect(this.newContact.address).toMatch(/Louisville/);
    expect(this.newContact.address).not.toMatch(/Tac/);


  });

});