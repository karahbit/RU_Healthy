
//This Javascript file is used to add an new user to the firebase database. 


//The function below adds users to the database. 
function updateProf(uid) 
{	//window.alert('add user starting');
	var firebaseRef = firebase.database().ref(); 
	firebaseRef.child('Physician').child(uid).set(
		//This sections below adds the information the the firebase database as necessary.
		//The item to the left of the semicolon is the key or identifier while the part on the 
		//right is the value. 
		{
		 'email': email.value, 
		 'first name': nameFirst.value,
		 'last name': nameLast.value, 
		 'middle name':nameMiddle.value, 
		 'office address':officeAddress.value, 
		 'city':officeCity.value, 
		 'state':officeState.value, 
		 'zipcode':officeZip.value, 
		 'office number':numOffice.value, 
		 'mobile number':numMobile.value, 
		 'insurance':insurance.value,
		 'gender':gender.value, 
		 'id':uid
		}).then(function (){
			window.alert("User updated successfully");
		});
	//This alert sends a message to the user informing them that their account has been
	//successfully added to the database. 
};