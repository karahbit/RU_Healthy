
var tablename; 
var patientActivity = [,];
function getPatientActivityInfo(patientID, param) 
{	var tableName = param;
	window.alert('retreiving patient data'); 
	patientActivity  = [,]
	
	var query = firebase.database().ref("Patient/" + patientID+ "/Step Count").orderByKey();
	query.once("value")
	  .then(function(snapshot) 
	{	window.alert('gathering information');
	    snapshot.forEach(function(childSnapshot) 
	    	{
		      var key = childSnapshot.key;
		      var childData = childSnapshot.val();
		      //window.alert(childData); 	      
		      patientActivity.push ([key, childData]); 
		      
	       
	    	});    
		//window.alert(patientData); 
	}).then(function(printArray){printTable (patientActivity, tableName)});
	//.then(function(){callback([patientData]);});
};


function printTable (Array, header)
{
		
		var htmlOut ="<p align = 'center'>" +
		"<img src='RU Healthy Logo.jpg' alt='Smiley face' height = '100' width = '125'>"
			+ "<table align = 'center' border='1|1'>";
		htmlOut += "<tr> <th colspan='2'>" +header + "</th>";
		for(var i in Array)
		{

		    	
			htmlOut += "<tr>";
	     	for(var j in Array[i])
		        htmlOut += "<td>"+ Array[i][j]+"</td>";
		    htmlOut += "</tr>";
		}

		htmlOut += "</table>";
		htmlOut += "<a href='Patient Information.html' align = 'center'>Return to Patient Information</a></td>"
		
		document.write(htmlOut);
		return htmlOut;
};
