var app = angular.module('app', []);

app.factory('contacts', function() {
	return [
		{ "firstname": "Wanasak", "lastname": "Surentaranggule", "phone": '123456' },
		{ "firstname": "Cristiano", "lastname": "Ronaldo", "phone": '674456' },
		{ "firstname": "Wayne", "lastname": "Rooney", "phone": '334455' },
		{ "firstname": "David", "lastname": "De Gea", "phone": '112245' },
		{ "firstname": "Alan", "lastname": "Smith", "phone": '098554' }
	]
})

app.controller('appCtrl', function (contacts) {
	this.contacts = contacts;
	this.selectedContact = null;
	this.contactCopy = null;

	this.selectContact = function(contact) {
		this.selectedContact = contact;
		this.contactCopy = angular.copy(contact);
	}

	this.saveContact = function() {
		this.selectedContact.firstname = this.contactCopy.firstname;
	}
})