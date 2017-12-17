//This file contains common functions that may be used by several scripts.

//The function below removes duplicates from the patient list
//The code was copied and modified from the site below
//http://mikeheavers.com/tutorials/removing_duplicates_in_an_array_using_javascript/ 
function removeDuplicates(Array)
{	//var duplicatesArray = [2, 1, 3, 2, 4, 5, 5, 6, 7];
	var uniqueArray = Array.filter(function(elem, pos,arr) 
		{
		  return arr.indexOf(elem) == pos;
		});

	//window.alert(uniqueArray); 
}; 

