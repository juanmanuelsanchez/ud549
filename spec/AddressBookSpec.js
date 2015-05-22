describe ('Address Book', function(){

  it('Should be able to add a Contact', function(){

    var addressBook= new AddressBook();
    this.newContact= new Contact("John", 67809, "LuisVille");

    addressBook.addContact(this.newContact);

    expect(addressBook.getContact(0)).toBe(this.newContact);
    expect(this.newContact.name).toBeDefined();


  });

});