README3.TXT (INTEGRATION TESTING)


GENERAL INFORMATION

The code is based on the a class project at Rutgers University. 
Project Title: RU Healthy?
Class:  Software Engineering I   
Course No: ECE 567
Professor: Ivan Marsic
Semester: Fall 2017


This project retrieves activity and heart rate information using Android phone sensors.  It displays this information to the user/patient on the android side.  The web application will allow clients to access this information via online SQL databases stored on the android locally. 


GROUP PARTICIPANTS
Aymen F Al-Saadi, Tahiya Chowdhury, Tina Drew, 
George Koubbe, Himabindu Paruchuri and Ramya Tadepalli



GENERAL INFORMATION

All of our integration testing so far was done manually.  For future testing we intended perform automated testing. Additionally most of the testing was done under ambient conditions we intend on expanding the test criteria to include more stringent test conditions.  


ANDROID APP INTEGRATION TESTING
---------------------------------------------------------------------------------------------------------------------
Registration and login verification:

We tested the login and registration functionality by creating user accounts and logging into the system.  We verified that we were able to successfully login after registration.  Also, we verified that the user login information was stored in the database.  

--------------------------------------------------------------------------------------------------------------------

Pedometer:

To verify the accuracy of the calculated steps of our algorithm, we relied on the data of the Health app of the iPhone. This application uses the iPhone’s internal sensors to calculate steps. We tried walking and running with both the Android smartphone and the iPhone. We observed that the steps calculated with our algorithm had a difference of +/-10 steps compared to the Health app of the iPhone. Also, it is worth mentioning that the iPhone uses both a combination of internal sensors and geolocalization to effectively determine movement, while our app only uses the built-in accelerometer. With this in mind, we found that the results were quite accurate anyway. However, when holding the Android device steadily or putting it in a backpack for example, it does not detect movement for the reasons previously mentioned. If put in a pocket, it does detect movement, because the Android device “moves” with our legs. In conclusion, to accurately detect steps with the current implementation, we need to cause sudden movements in the device.

--------------------------------------------------------------------------------------------------------------------
Heart Rate Detection Verification Testing:

We compared the data with information from fitbit and found that the results were within +/- 10 
BPM of what the Fitbit band was detecting. We ran approximately 5 iterations of this test different subject under optimal conditions.  For the next demonstration we intend on testing under more stressful conditions to determine if the app is still accurate.  We will attempt to test under low lighting conditions and after an intense workout. 

-------------------------------------------------------------------------------------------------------------------
UI and Android Pages Integration Verification:

This test involved verifying that the UI pages were successfully integrated with the code.  We went through each scenario and verified that allow inputs and outputs displayed properly and were linked to the appropriate function.  

-----------------------------------------------------------------------------------------------------------------
Registration and login verification:

We tested the login and registration functionality by creating user accounts and logging into the system.  We verified that we were able to successfully login after registration.  Also, we verified that the user login information was stored in the database.  

--------------------------------------------------------------------------------------------------------------------

BUGS

One of the bugs that we identified in the Android app is that when the submit button is selected in the profile page, the app stops working.  Since we are aware of the issue, we intend to fix for the next integration. 

