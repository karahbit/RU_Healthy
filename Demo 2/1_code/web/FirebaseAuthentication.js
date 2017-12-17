//The funcitons below are used for firebase authentication 
//The code modified for the code available here:
//https://firebase.google.com/docs/auth/web/password-auth

function register (email, password)
{
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  //window.alert( 'Account created'); 
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  return email, password;
	  // ...
	 });
 
};

function login (email, password)
{	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
	  .then(function() {
		    // Existing and future Auth states are now persisted in the current
		    // session only. Closing the window would clear any existing state even
		    // if a user forgets to sign out.
		    // ...
		    // New sign-in will be persisted with session persistence.
		    return firebase.auth().signInWithEmailAndPassword(email, password);
		  })
		  .catch(function(error) {
		    // Handle Errors here.
		    var errorCode = error.code;
		    var errorMessage = error.message;
		  });
//window.alert( 'Logining in'); 
};

var userID; 
var status;
function GetLoginStatus(callback)
{	var uid;
	var email;
	firebase.auth().onAuthStateChanged(function(user) 
	{	
		 if (user) 
		  {
		    // User is signed in.
		    var displayName = user.displayName;
		    email = user.email;
		    var emailVerified = user.emailVerified;
		    var photoURL = user.photoURL;
		    var isAnonymous = user.isAnonymous;
		    uid = user.uid;
		    var providerData = user.providerData;
		    // ...
		  status = "User is signed in with user ID " + uid; 
		   } 
		  else 
		  {
			  status = "User is not signed in"; 
			  uid = "000"
			  // User is signed out.
			  // ...
		  }
	    setTimeout(function(){
	    	//window.alert(status);
	    	}, 1000);
	    callback(email, uid);
	});

};

function logout ()
{
	firebase.auth().signOut().then(function() {
		  window.alert('You are now signed out');
		}, function(error) {
		  window.alert('Sign Out Error', error);
		});
};
